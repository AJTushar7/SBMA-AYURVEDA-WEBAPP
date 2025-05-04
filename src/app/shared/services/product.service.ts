
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../core/models/product.model';
import { products } from '../../core/data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = products;

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(this.products.filter(p => p.featured));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(this.products.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    ));
  }

  getAllTestimonials(): Observable<any[]> {
    return of([]); 
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  searchProducts(term: string): Observable<Product[]> {
    const searchTerm = term.toLowerCase();
    return of(this.products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
    ));
  }
}
