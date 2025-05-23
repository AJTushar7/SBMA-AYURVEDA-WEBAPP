import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../core/services/product.service";
import { Product } from "../../core/models/product.model";
import { Testimonial } from "../../core/models/testimonial.model";
import { HeroSliderComponent } from "./components/hero-slider/hero-slider.component";
import { FeaturedProductsComponent } from "./components/featured-products/featured-products.component";
import { SuperpowerSectionComponent } from "./components/superpower-section/superpower-section.component";
import { AvailableOnComponent } from "./components/available-on/available-on.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { CertificationsComponent } from "./components/certifications/certifications.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    HeroSliderComponent,
    FeaturedProductsComponent,
    SuperpowerSectionComponent,
    AvailableOnComponent,
    TestimonialsComponent,
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
