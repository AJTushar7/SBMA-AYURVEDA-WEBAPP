
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="not-found">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <a [routerLink]="['/']">Go to Homepage</a>
    </div>
  `,
  styles: [`
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      text-align: center;
      
      h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }
      
      a {
        margin-top: 2rem;
        padding: 1rem 2rem;
        background-color: #1e704d;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s;
        
        &:hover {
          background-color: #165336;
        }
      }
    }
  `]
})
export class NotFoundComponent {}
