import { Component, OnInit } from "@angular/core";
import { NgFor } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CarouselModule } from 'primeng/carousel';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
  imports: [NgFor, CarouselModule, FontAwesomeModule, RouterModule],
  templateUrl: "./hero-slider.component.html",
  styleUrls: ["./hero-slider.component.scss"],
})
export class HeroSliderComponent implements OnInit {
  arrowRightIcon = faArrowRight;
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  slides: SlideItem[] = [
    {
      imageUrl: "assets/images/IMG-20250327-WA0018.jpg",
      title: "Premium Ayurvedic Products",
      description:
        "Discover the healing power of Ayurveda with our authentic, science-backed formulations",
      buttonText: "Shop Now",
      buttonLink: "#products",
    },
    {
      imageUrl: "assets/images/IMG-20250327-WA0016.jpg",
      title: "Ancient Wisdom, Modern Science",
      description:
        "SBMA combines 25+ years of Ayurvedic heritage with innovative research",
      buttonText: "Learn More",
      buttonLink: "#about",
    },
    {
      imageUrl: "assets/images/IMG-20250327-WA0017.jpg",
      title: "100% Natural Ingredients",
      description:
        "Ethically sourced herbs and extracts from the finest regions of India",
      buttonText: "Explore",
      buttonLink: "#products",
    },
  ];

  ngOnInit(): void {}
}