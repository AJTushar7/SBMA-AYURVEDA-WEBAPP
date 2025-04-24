import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Product } from "../../../../core/models/product.model";

@Component({
  selector: "app-featured-products",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./featured-products.component.html",
  styleUrls: ["./featured-products.component.scss"],
})
export class FeaturedProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  displayProducts: Product[] = [];

  ngOnInit() {
    this.displayProducts = this.products.slice(0, 4);
  }
}
