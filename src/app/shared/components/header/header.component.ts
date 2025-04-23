
import { Component, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faTimes, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../services/product.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule, FontAwesomeModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('headerAnimation', [
      state('transparent', style({
        backgroundColor: 'transparent',
        boxShadow: 'none'
      })),
      state('solid', style({
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
      })),
      transition('transparent <=> solid', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent implements OnInit {
  // Component state
  isScrolled = false;
  isMobileMenuOpen = false;
  isSearchBarVisible = false;
  searchQuery = '';
  suggestions: string[] = [];
  private searchTerms = new Subject<string>();
  isDropdownOpen = false;
  selectedCategory = '';
  popupProducts: any[] = [];
  
  // Font Awesome icons
  searchIcon = faSearch;
  closeIcon = faTimes;
  userIcon = faUser;
  menuIcon = faBars;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    // Initial check for scroll position
    this.checkScroll();
    
    // Setup search suggestions debounce
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(term => {
      this.getSuggestions(term);
    });
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  navigateToHome() {
    this.router.navigate(['/']);
    this.closeMobileMenu();
  }

  showCategoryProducts(category: string, event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.productService.getAllProducts().subscribe(products => {
      this.popupProducts = products.filter(p => 
        p.category.toLowerCase() === category.toLowerCase() ||
        (category === 'Liquids' && p.category.toLowerCase() === 'liquid') ||
        (category === 'Powders' && p.category.toLowerCase() === 'powder')
      );
      this.selectedCategory = category;
      this.isDropdownOpen = true;
    });
  }

  navigateToProduct(productId: number, event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDropdownOpen = false;
    this.router.navigate(['/products', productId]);
  }

  viewAllProducts(event: Event) {
    event.preventDefault();
    this.isDropdownOpen = false;
    setTimeout(() => {
      this.router.navigate(['/products']);
    }, 300);
  }
  
  toggleSearchBar() {
    this.isSearchBarVisible = !this.isSearchBarVisible;
    if (this.isSearchBarVisible) {
      this.searchQuery = '';
      document.body.classList.add('search-active');
    } else {
      document.body.classList.remove('search-active');
    }
  }
  
  closeSearchBar() {
    this.isSearchBarVisible = false;
    document.body.classList.remove('search-active');
  }
  
  performSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/products'], { 
        queryParams: { search: this.searchQuery.trim() } 
      });
      this.closeSearchBar();
    }
  }
  
  onSearchKeyup() {
    const term = this.searchQuery.trim();
    if (term.length >= 2) {
      this.searchTerms.next(term);
    } else {
      this.suggestions = [];
    }
  }
  
  getSuggestions(term: string) {
    if (term.length < 2) {
      this.suggestions = [
        'Best Sellers',
        'New Arrivals',
        'Liver Health',
        'Hair Care',
        'Digestive Health',
        'Immunity Boosters'
      ];
      return;
    }
    
    this.productService.searchProducts(term).subscribe(products => {
      this.suggestions = products
        .map(product => product.name)
        .filter((name, index, self) => self.indexOf(name) === index)
        .slice(0, 6);
    });
  }
  
  selectSuggestion(suggestion: string) {
    this.searchQuery = suggestion;
    this.performSearch();
  }
}
