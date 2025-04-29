import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../shared/services/product.service';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {
  categories = [
    'Hair Care', 'Lung Care', 'Liver Care', 'Heart Care', 
    'Man Care', 'Woman Care', 'Sugar Care', 'Weight Care'
  ];
  selectedCategory = 'Hair Care';
  products: any[] = [];
  displayedProducts: any[] = [];
  hoveredProduct: number | null = null;
  currentProductIndex = 0;
  isMobile = false;
  private marqueeInterval: any;

  constructor(private productService: ProductService) {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngOnInit() {
    this.loadProducts();
    this.startMarquee();
  }

  ngOnDestroy() {
    if (this.marqueeInterval) {
      clearInterval(this.marqueeInterval);
    }
    window.removeEventListener('resize', () => this.checkScreenSize());
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    this.updateDisplayedProducts();
  }

  private startMarquee() {
    this.marqueeInterval = setInterval(() => {
      const container = document.querySelector('.categories') as HTMLElement;
      if (container) {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
    }, 30);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.currentProductIndex = 0;
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getProductsByCategory(this.selectedCategory).subscribe(products => {
      this.products = products;
      this.updateDisplayedProducts();
    });
  }

  private updateDisplayedProducts() {
    if (this.isMobile) {
      this.displayedProducts = this.products.slice(this.currentProductIndex, this.currentProductIndex + 1);
    } else {
      this.displayedProducts = this.products.slice(0, 3);
    }
  }

  nextProduct() {
    if (this.currentProductIndex < this.products.length - 1) {
      this.currentProductIndex++;
      this.updateDisplayedProducts();
    }
  }

  previousProduct() {
    if (this.currentProductIndex > 0) {
      this.currentProductIndex--;
      this.updateDisplayedProducts();
    }
  }
}