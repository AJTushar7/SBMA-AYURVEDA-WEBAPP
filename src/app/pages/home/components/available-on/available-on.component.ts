import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

interface Marketplace {
  name: string;
  logo: string;
  link: string;
}

@Component({
  selector: 'app-available-on',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './available-on.component.html',
  styleUrls: ['./available-on.component.scss']
})
export class AvailableOnComponent {
  marketplaces: Marketplace[] = [
    {
      name: 'Amazon',
      logo: 'fa-amazon',
      link: 'javascript:void(0)'
    },
    {
      name: 'Flipkart',
      logo: 'fa-shopping-cart', // Using a generic icon as Font Awesome doesn't have Flipkart
      link: 'javascript:void(0)'
    },
    {
      name: '1mg',
      logo: 'fa-medkit',
      link: 'javascript:void(0)'
    },
    {
      name: 'PharmEasy',
      logo: 'fa-heartbeat',
      link: 'javascript:void(0)'
    }
  ];
}
