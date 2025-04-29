
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
  hoveredProduct: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getProductsByCategory(this.selectedCategory).subscribe(
      products => this.products = products
    );
  }
}
