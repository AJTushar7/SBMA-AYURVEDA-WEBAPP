
import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgIf, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  calculateDiscount(): number {
    if (!this.product.discountPrice) return 0;
    return Math.round(((this.product.price - this.product.discountPrice) / this.product.price) * 100);
  }

  addToCart(): void {
    // TODO: Implement cart functionality
    console.log('Adding to cart:', this.product);
  }
}
