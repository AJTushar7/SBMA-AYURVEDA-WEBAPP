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
      name: 'Tata 1mg',
      logo: 'assets/images/tata-1mg-logo.png',
      link: 'javascript:void(0)'
    },
    {
      name: 'Amazon',
      logo: 'assets/images/amazon-logo.png',
      link: 'javascript:void(0)'
    },
    {
      name: 'Netmeds',
      logo: 'assets/images/netmeds-logo.png',
      link: 'javascript:void(0)'
    }
  ];
}
