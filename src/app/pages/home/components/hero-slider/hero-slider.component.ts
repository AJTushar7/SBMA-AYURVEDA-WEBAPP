
import { Component, OnInit } from "@angular/core";
import { NgFor } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MatButtonModule } from '@angular/material/button';

interface SlideItem {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: "app-hero-slider",
  standalone: true,
  imports: [NgFor, RouterModule, MatButtonModule, FontAwesomeModule],
  templateUrl: "./hero-slider.component.html",
  styleUrls: ["./hero-slider.component.scss"],
})
export class HeroSliderComponent implements OnInit {
  arrowRightIcon = faArrowRight;
  currentSlide = 0;
  slides: SlideItem[] = [
    {
      imageUrl: "assets/images/IMG-20250327-WA0006.jpg",
      title: "Natural Ayurvedic Products",
      description: "Discover our range of authentic Ayurvedic solutions",
      buttonText: "",
      buttonLink: ""
    },
    {
      imageUrl: "assets/images/IMG-20250327-WA0018.jpg",
      title: "Premium Ayurvedic Products",
      description: "Discover the healing power of Ayurveda with our authentic, science-backed formulations",
      buttonText: "Shop Now",
      buttonLink: "#products",
    },
    {
      imageUrl: "assets/images/IMG-20250327-WA0016.jpg",
      title: "Ancient Wisdom, Modern Science",
      description: "SBMA combines 25+ years of Ayurvedic heritage with innovative research",
      buttonText: "Learn More",
      buttonLink: "#about",
    },
    {
      imageUrl: "assets/images/IMG-20250327-WA0017.jpg",
      title: "100% Natural Ingredients",
      description: "Ethically sourced herbs and extracts from the finest regions of India",
      buttonText: "Explore",
      buttonLink: "#products",
    },
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  setSlide(index: number): void {
    this.currentSlide = index;
  }
}
