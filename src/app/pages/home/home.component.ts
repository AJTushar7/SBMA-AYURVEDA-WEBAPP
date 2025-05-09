
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductService } from "../../core/services/product.service";
import { Product } from "../../core/models/product.model";
import { Testimonial } from "../../core/models/testimonial.model";
import { HeroSliderComponent } from "./components/hero-slider/hero-slider.component";
import { FeaturedProductsComponent } from "./components/featured-products/featured-products.component";
import { SuperpowerSectionComponent } from "./components/superpower-section/superpower-section.component";
import { CategoryProductsComponent } from "./components/category-products/category-products.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { AvailableOnComponent } from "./components/available-on/available-on.component";
import { CertificationsComponent } from "./components/certifications/certifications.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    HeroSliderComponent,
    FeaturedProductsComponent,
    SuperpowerSectionComponent,
    CategoryProductsComponent,
    AboutUsComponent,
    TestimonialsComponent,
    AvailableOnComponent,
    CertificationsComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  testimonials: Testimonial[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadFeaturedProducts();
    this.loadTestimonials();
  }

  private loadFeaturedProducts(): void {
    this.productService.getFeaturedProducts().subscribe((products) => {
      this.featuredProducts = products;
    });
  }

  private loadTestimonials(): void {
    this.productService.getAllTestimonials().subscribe((testimonials) => {
      this.testimonials = testimonials;
    });
  }
}
