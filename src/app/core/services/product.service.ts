import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { PRODUCTS } from '../data/products.data';
import { Testimonial } from '../models/testimonial.model';
import { TESTIMONIALS } from '../data/testimonials.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(PRODUCTS.filter(product => product.featured));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(PRODUCTS.find(product => product.id === id));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(PRODUCTS.filter(product => product.category === category));
  }

  getAllTestimonials(): Observable<Testimonial[]> {
    return of(TESTIMONIALS);
  }
}
