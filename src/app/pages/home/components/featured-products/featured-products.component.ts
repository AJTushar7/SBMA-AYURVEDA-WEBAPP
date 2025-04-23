
import { Component, Input, OnInit, OnChanges } from '@angular/core';
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
export class FeaturedProductsComponent implements OnInit, OnChanges {
  @Input() products: Product[] = [];
  displayProducts: Product[][] = [];
  
  constructor() {}

  ngOnInit(): void {
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
    const productsCopy = [...this.products];
    this.displayProducts = [];
    while (productsCopy.length) {
      this.displayProducts.push(productsCopy.splice(0, 4));
    }
  }
}
