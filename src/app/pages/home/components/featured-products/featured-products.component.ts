import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../core/models/product.model';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [NgFor, RouterModule, ProductCardComponent],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  
  // We'll display the products in groups to create a visually pleasing layout
  displayProducts: Product[][] = [];
  
  constructor() { }

  ngOnInit(): void {
    // Wait for input products to be initialized
    if (this.products.length) {
      this.organizeProducts();
    }
  }
  
  ngOnChanges(): void {
    if (this.products.length) {
      this.organizeProducts();
    }
  }
  
  private organizeProducts(): void {
    // Organize products into rows of 4 for desktop, will be responsive in the template
    const productsCopy = [...this.products];
    this.displayProducts = [];
    
    while (productsCopy.length) {
      this.displayProducts.push(productsCopy.splice(0, 4));
    }
  }
}
