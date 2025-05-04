import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Product } from "../models/product.model";
import { products } from "../data/products.data";
import { TESTIMONIALS } from "../data/testimonials.data";
import { Testimonial } from "../models/testimonial.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor() {}

  getAllProducts(): Observable<Product[]> {
    return of(products);
  }

  getFeaturedProducts(): Observable<Product[]> {
    return of(products.filter((product) => product.featured));
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(products.find((product) => product.id === id));
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return of(products.filter((product) => product.category === category));
  }

  searchProducts(term: string): Observable<Product[]> {
    const searchTerm = term.toLowerCase();
    return of(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm),
      ),
    );
  }

  getAllTestimonials(): Observable<Testimonial[]> {
    return of(TESTIMONIALS);
  }
}
