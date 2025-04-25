
import { Component, Injector } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ProductService } from './shared/services/product.service';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AnnouncementBarComponent } from './shared/components/announcement-bar/announcement-bar.component';
import { WhatsappIconComponent } from './shared/components/whatsapp-icon/whatsapp-icon.component';
import { OfflineNotificationComponent } from './shared/components/offline-notification/offline-notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AnnouncementBarComponent,
    WhatsappIconComponent,
    OfflineNotificationComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private titleService: Title,
    private injector: Injector
  ) {
    // Handle scroll to top on navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    // Handle page leave confirmation
    window.addEventListener('beforeunload', (e) => {
      e.preventDefault();
      e.returnValue = '';
    });
    // Handle scroll to top on page refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    // Handle title updates on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      let title = 'SBMA - Ayurvedic Excellence';
      const currentRoute = this.router.url;
      
      if (currentRoute.includes('/products/')) {
        const productId = currentRoute.split('/').pop();
        const productService = this.injector.get(ProductService);
        productService.getProduct(Number(productId)).subscribe(product => {
          if (product) {
            title = `${product.name} | ${title}`;
            this.titleService.setTitle(title);
          }
        });
      } else if (currentRoute === '/products') {
        title = 'Our Products | ' + title;
        this.titleService.setTitle(title);
      } else if (currentRoute === '/about') {
        title = 'About Us | ' + title;
        this.titleService.setTitle(title);
      } else {
        this.titleService.setTitle(title);
      }
    });
  }
}
