import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faStar, faShare, faHeart } from '@fortawesome/free-solid-svg-icons';
// Using only solid icons for now
// import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { AnnouncementBarComponent } from '../../../shared/components/announcement-bar/announcement-bar.component';
import { ProductService, Product } from '../../../shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    HeaderComponent,
    FooterComponent,
    AnnouncementBarComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, AfterViewInit {
  backIcon = faChevronLeft;
  starIcon = faStar;
  regularStarIcon = faStar; // Using solid stars for now
  shareIcon = faShare;
  heartIcon = faHeart;
  
  product: Product | undefined;
  relatedProducts: Product[] = [];
  activeTab: 'description' | 'benefits' | 'ingredients' | 'usage' = 'description';
  quantity: number = 1;
  
  @ViewChild('zoomImage') zoomImage?: ElementRef;
  @ViewChild('zoomLens') zoomLens?: ElementRef;
  @ViewChild('zoomResult') zoomResult?: ElementRef;
  
  private zoomLevel: number = 2;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadProduct();
  }
  
  loadProduct(): void {
    this.route.paramMap.subscribe(params => {
      const productId = parseInt(params.get('id') || '0', 10);
      if (productId) {
        this.productService.getProductById(productId).subscribe(product => {
          if (product) {
            this.product = product;
            this.loadRelatedProducts(product.category);
          } else {
            this.router.navigate(['/products']);
          }
        });
      } else {
        this.router.navigate(['/products']);
      }
    });
  }
  
  loadRelatedProducts(category: string): void {
    this.productService.getProductsByCategory(category).subscribe(products => {
      // Filter out the current product and get up to 3 related products
      this.relatedProducts = products
        .filter(p => p.id !== this.product?.id)
        .slice(0, 3);
    });
  }
  
  setActiveTab(tab: 'description' | 'benefits' | 'ingredients' | 'usage'): void {
    this.activeTab = tab;
  }
  
  ngAfterViewInit(): void {
    this.initializeImageZoom();
  }
  
  initializeImageZoom(): void {
    // Image zoom functionality will be implemented here
    setTimeout(() => {
      const imageContainer = document.querySelector('.image-zoom-container');
      const zoomImg = document.querySelector('.image-zoom-container img');
      const zoomLens = document.querySelector('.zoom-lens');
      const zoomResult = document.querySelector('.zoom-result');
      
      if (imageContainer && zoomImg && zoomLens && zoomResult) {
        // Will be implemented with mouse event handlers
        // For now, just show the zoom result on hover
        imageContainer.addEventListener('mouseenter', () => {
          if (zoomResult) {
            (zoomResult as HTMLElement).style.display = 'block';
            // Set background image from the main image
            (zoomResult as HTMLElement).style.backgroundImage = `url(${(zoomImg as HTMLImageElement).src})`;
            (zoomResult as HTMLElement).style.backgroundSize = `${(zoomImg as HTMLImageElement).width * this.zoomLevel}px ${(zoomImg as HTMLImageElement).height * this.zoomLevel}px`;
          }
        });
        
        imageContainer.addEventListener('mouseleave', () => {
          if (zoomResult) {
            (zoomResult as HTMLElement).style.display = 'none';
          }
        });
      }
    }, 1000);
  }
  
  increaseQuantity(): void {
    this.quantity++;
  }
  
  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  
  buyNowViaWhatsApp(): void {
    if (!this.product) return;
    
    // SBMA WhatsApp business number (replace with actual number)
    const whatsappNumber = '919876543210'; // Replace with actual SBMA WhatsApp business number
    const productName = this.product.name;
    const productPrice = this.product.price;
    
    // Create the message with product details and quantity
    const message = `Hello! I would like to buy *${productName}* (₹${productPrice}) x${this.quantity} units. Please provide more details for purchase.`;
    
    // Construct the WhatsApp URL with the message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  }
  
  shareOnSocial(platform: 'facebook' | 'twitter' | 'pinterest' | 'whatsapp'): void {
    if (!this.product) return;
    
    const productUrl = window.location.href;
    const productName = this.product.name;
    const productDesc = this.product.shortDescription;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent(productName)}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(productUrl)}&description=${encodeURIComponent(productDesc)}&media=${encodeURIComponent(this.product.imageUrl)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(productName + ' - ' + productUrl)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  }
  
  getStars(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const stars = Array(5).fill(0);
    
    for (let i = 0; i < fullStars; i++) {
      stars[i] = 2; // Full star
    }
    
    if (rating % 1 >= 0.5) {
      stars[fullStars] = 1; // Half star
    }
    
    return stars;
  }
}