import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Testimonial } from '../../../../core/models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() testimonials: Testimonial[] = [];
  activeSlide = 0;
  slidesPerView = 3;
  
  constructor() { }

  private autoScrollInterval: any;

  ngOnInit(): void {
    this.updateSlidesPerView();
    window.addEventListener('resize', () => {
      this.updateSlidesPerView();
    });
    this.startAutoScroll();
    
    // Handle anchor navigation
    if (window.location.hash === '#testimonials') {
      setTimeout(() => {
        const element = document.getElementById('testimonials');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      }, 100);
    }
  }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  private startAutoScroll(): void {
    this.autoScrollInterval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }
  
  updateSlidesPerView() {
    if (window.innerWidth < 768) {
      this.slidesPerView = 1;
    } else if (window.innerWidth < 992) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 3;
    }
  }
  
  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % (this.testimonials.length - this.slidesPerView + 1);
  }
  
  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + (this.testimonials.length - this.slidesPerView + 1)) % (this.testimonials.length - this.slidesPerView + 1);
  }
  
  setActiveSlide(index: number) {
    this.activeSlide = index;
  }
  
  isValidSlideIndex(index: number): boolean {
    return index >= 0 && index <= this.testimonials.length - this.slidesPerView;
  }
  
  // Generate an array of stars based on rating
  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
