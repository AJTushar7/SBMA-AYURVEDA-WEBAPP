import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-whatsapp-icon',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './whatsapp-icon.component.html',
  styleUrls: ['./whatsapp-icon.component.scss']
})
export class WhatsappIconComponent {
  whatsappIcon = faWhatsapp;
  
  // Replace with your actual SBMA business WhatsApp number
  whatsappNumber = '919876543210'; // Format: country code without + followed by number
  
  openWhatsapp(): void {
    const url = `https://wa.me/${this.whatsappNumber}?text=Hello%20SBMA%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.`;
    window.open(url, '_blank');
  }
}