
import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AnnouncementBarComponent } from './shared/components/announcement-bar/announcement-bar.component';
import { WhatsappIconComponent } from './shared/components/whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    AnnouncementBarComponent,
    WhatsappIconComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private titleService: Title
  ) {
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
        title = 'Product Details | ' + title;
      } else if (currentRoute === '/products') {
        title = 'Our Products | ' + title;
      } else if (currentRoute === '/about') {
        title = 'About Us | ' + title;
      }
      
      this.titleService.setTitle(title);
    });
  }
}
