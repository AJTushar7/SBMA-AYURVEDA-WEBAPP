
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offline-notification',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!isOnline" class="offline-notification">
      <div class="offline-content">
        <h2>You're Offline</h2>
        <p>Please check your internet connection and try again.</p>
      </div>
    </div>
  `,
  styles: [`
    .offline-notification {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      
      .offline-content {
        background-color: white;
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
        
        h2 {
          color: #1e704d;
          margin-bottom: 1rem;
        }
      }
    }
  `]
})
export class OfflineNotificationComponent implements OnInit {
  isOnline = navigator.onLine;

  ngOnInit() {
    window.addEventListener('online', () => this.isOnline = true);
    window.addEventListener('offline', () => this.isOnline = false);
  }
}
