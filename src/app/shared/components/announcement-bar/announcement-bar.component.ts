import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement-bar',
  templateUrl: './announcement-bar.component.html',
  styleUrls: ['./announcement-bar.component.scss']
})
export class AnnouncementBarComponent {
  announcements = [
    'Free shipping on orders above ₹599',
    'Use code AYURVEDA15 for 15% off on your first order',
    'New D.L.K. Liquid now available!'
  ];
  
  currentAnnouncementIndex = 0;
  
  constructor() {
    this.startRotation();
  }
  
  startRotation() {
    setInterval(() => {
      this.currentAnnouncementIndex = (this.currentAnnouncementIndex + 1) % this.announcements.length;
    }, 5000);
  }
}
