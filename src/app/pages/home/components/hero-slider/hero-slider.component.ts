import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SlideItem {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [NgFor, NgbCarouselModule, FontAwesomeModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HeroSliderComponent implements OnInit {
  arrowRightIcon = faArrowRight;
  prevIcon = faChevronLeft;
  nextIcon = faChevronRight;
  
  slides: SlideItem[] = [
    {
      imageUrl: 'assets/images/IMG-20250327-WA0015.jpg',
      title: 'Premium Ayurvedic Products',
      description: 'Discover the healing power of Ayurveda with our authentic, science-backed formulations',
      buttonText: 'Shop Now',
      buttonLink: '#products'
    },
    {
      imageUrl: 'assets/images/IMG-20250327-WA0016.jpg',
      title: 'Ancient Wisdom, Modern Science',
      description: 'SBMA combines 25+ years of Ayurvedic heritage with innovative research',
      buttonText: 'Learn More',
      buttonLink: '#about'
    },
    {
      imageUrl: 'assets/images/IMG-20250327-WA0017.jpg',
      title: '100% Natural Ingredients',
      description: 'Ethically sourced herbs and extracts from the finest regions of India',
      buttonText: 'Explore',
      buttonLink: '#products'
    }
  ];

  constructor(config: NgbCarouselConfig) {
    // Customize carousel config for better UX
    config.interval = 6000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.showNavigationArrows = false; // Hide default arrows
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }
}
