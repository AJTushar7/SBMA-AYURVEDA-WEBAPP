import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

interface Superpower {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-superpower-section',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './superpower-section.component.html',
  styleUrls: ['./superpower-section.component.scss']
})
export class SuperpowerSectionComponent {
  superpowers: Superpower[] = [
    {
      icon: 'fa-certificate',
      title: '25 Years of Excellence',
      description: 'More than two decades of experience in authentic Ayurvedic formulations'
    },
    {
      icon: 'fa-leaf',
      title: 'Indian Heritage',
      description: 'Preserving ancient Ayurvedic wisdom passed down through generations'
    },
    {
      icon: 'fa-flask',
      title: 'Scientific Research',
      description: 'Modern scientific methods to enhance traditional Ayurvedic formulations'
    },
    {
      icon: 'fa-heart',
      title: '100% Natural Ingredients',
      description: 'Pure and authentic herbs sourced from trusted organic farmers'
    }
  ];
}
