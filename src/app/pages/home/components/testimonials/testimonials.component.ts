
import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Testimonial } from '../../../../core/models/testimonial.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor, NgIf, FontAwesomeModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() testimonials: Testimonial[] = [];
  activeSlide = 0;
  slidesPerView = 3;
  private autoScrollInterval: any;

  constructor() { }

  ngOnInit(): void {
    this.updateSlidesPerView();
    window.addEventListener('resize', () => {
      this.updateSlidesPerView();
    });
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
    window.removeEventListener('resize', () => this.updateSlidesPerView());
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
    if (this.isValidSlideIndex(this.activeSlide + 1)) {
      this.activeSlide++;
    } else {
      this.activeSlide = 0;
    }
  }

  prevSlide() {
    if (this.isValidSlideIndex(this.activeSlide - 1)) {
      this.activeSlide--;
    } else {
      this.activeSlide = this.testimonials.length - this.slidesPerView;
    }
  }

  setActiveSlide(index: number) {
    if (this.isValidSlideIndex(index)) {
      this.activeSlide = index;
    }
  }

  isValidSlideIndex(index: number): boolean {
    return index >= 0 && index <= this.testimonials.length - this.slidesPerView;
  }

  generateStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
