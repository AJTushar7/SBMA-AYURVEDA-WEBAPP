import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {
  faSortAmountDown,
  faSortAmountUp,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { HeaderComponent } from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { AnnouncementBarComponent } from "../../shared/components/announcement-bar/announcement-bar.component";
import { ProductService, Product } from "../../shared/services/product.service";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    HeaderComponent,
    AnnouncementBarComponent,
  ],
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  // Icons
  sortDownIcon = faSortAmountDown;
  sortUpIcon = faSortAmountUp;
  filterIcon = faFilter;
  searchIcon = faSearch;

  // Products data
  products: Product[] = [];
  filteredProducts: Product[] = [];

  // Search & Filtering
  searchQuery: string = "";
  selectedCategory: string = "";
  minPrice: number | null = null;
  maxPrice: number | null = null;
  showFeatured: boolean = false;
  showBestSellers: boolean = false;
  showNewProducts: boolean = false;

  // Sort options
  sortOptions = [
    { value: "name-asc", label: "Name (A-Z)" },
    { value: "name-desc", label: "Name (Z-A)" },
    { value: "price-asc", label: "Price (Low to High)" },
    { value: "price-desc", label: "Price (High to Low)" },
    { value: "rating-desc", label: "Rating (Highest first)" },
  ];
  selectedSort: string = "name-asc";

  // Filter panel visibility
  isFilterPanelVisible: boolean = false;

  // Categories
  categories: string[] = [];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadProducts();

    // Check for search query in URL parameters
    this.route.queryParams.subscribe((params) => {
      if (params["search"]) {
        this.searchQuery = params["search"];
        this.applySearch();
      }
    });
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = [...products];

      // Extract unique categories
      this.categories = [...new Set(products.map((p) => p.category))];

      // Apply initial sort
      this.applySorting();
    });
  }

  applySearch(): void {
    if (!this.searchQuery || this.searchQuery.trim() === "") {
      this.applyFilters();
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    this.productService.searchProducts(query).subscribe((results) => {
      this.filteredProducts = results;
      this.applyFilters(false);
    });
  }

  applyFilters(resetSearch: boolean = true): void {
    if (resetSearch) {
      this.searchQuery = "";
    }

    let filtered = [...this.products];

    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter((p) => p.category === this.selectedCategory);
    }

    // Apply price range filter
    if (this.minPrice !== null) {
      filtered = filtered.filter((p) => p.price >= this.minPrice!);
    }

    if (this.maxPrice !== null) {
      filtered = filtered.filter((p) => p.price <= this.maxPrice!);
    }

    // Apply feature filters
    if (this.showFeatured) {
      filtered = filtered.filter((p) => p.featured);
    }

    if (this.showBestSellers) {
      filtered = filtered.filter((p) => p.bestSeller);
    }

    if (this.showNewProducts) {
      filtered = filtered.filter((p) => p.new);
    }

    // Apply search if there's a query
    if (this.searchQuery && this.searchQuery.trim() !== "") {
      const query = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query)
      );
    }

    this.filteredProducts = filtered;
    this.applySorting();
  }

  applySorting(): void {
    const [field, direction] = this.selectedSort.split("-");

    this.filteredProducts.sort((a, b) => {
      if (field === "name") {
        return direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (field === "price") {
        return direction === "asc" ? a.price - b.price : b.price - a.price;
      } else if (field === "rating") {
        return direction === "asc" ? a.rating - b.rating : b.rating - a.rating;
      }
      return 0;
    });
  }

  toggleFilterPanel(): void {
    this.isFilterPanelVisible = !this.isFilterPanelVisible;
  }

  resetFilters(): void {
    this.searchQuery = "";
    this.selectedCategory = "";
    this.minPrice = null;
    this.maxPrice = null;
    this.showFeatured = false;
    this.showBestSellers = false;
    this.showNewProducts = false;
    this.selectedSort = "name-asc";

    this.filteredProducts = [...this.products];
    this.applySorting();
  }

  onSortChange(): void {
    this.applySorting();
  }
}
