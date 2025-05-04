
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { products } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  getAllProducts(): Observable<Product[]> {
    return of(products);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(products.filter((product: Product) => product.featured));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(products.find((product: Product) => product.id === id));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(products.filter((product: Product) => product.category === category));
  }
}
