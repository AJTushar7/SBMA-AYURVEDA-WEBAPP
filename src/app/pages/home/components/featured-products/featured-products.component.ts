
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../core/models/product.model';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  displayProducts: Product[] = [];

  ngOnInit() {
    this.displayProducts = this.products.slice(0, 4);
  }
}
