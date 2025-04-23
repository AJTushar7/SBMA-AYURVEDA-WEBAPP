import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface SlideItem {
  imageUrl: string;
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

@Component({
  selector: 'app-hero-slider',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;
  slides: SlideItem[] = [
    {
      imageUrl: "assets/images/IMG-20250327-WA0006.jpg",
      title: "Natural Ayurvedic Products",
      description: "Discover our range of authentic Ayurvedic solutions",
      buttonText: "Shop Now",
      buttonLink: "/products"
    },
    {
      imageUrl: "assets/images/IMG-20250327-WA0018.jpg",
      title: "Premium Ayurvedic Products",
      description: "Experience the power of traditional healing",
      buttonText: "Learn More",
      buttonLink: "/about"
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  private startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }
}