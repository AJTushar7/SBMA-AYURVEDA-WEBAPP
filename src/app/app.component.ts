import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  title = 'SBMA - Ayurvedic Excellence';
}
