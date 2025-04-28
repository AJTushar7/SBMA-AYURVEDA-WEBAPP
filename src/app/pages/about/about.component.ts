import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { AnnouncementBarComponent } from "../../shared/components/announcement-bar/announcement-bar.component";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    HeaderComponent,
    AnnouncementBarComponent,
  ],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  companyHistory = [
    {
      year: "1995",
      title: "Foundation",
      description:
        "SBMA was founded with the vision of bringing authentic Ayurvedic knowledge to the modern world.",
    },
    {
      year: "2005",
      title: "Research Center",
      description:
        "Established our first dedicated research facility for developing innovative Ayurvedic formulations.",
    },
    {
      year: "2015",
      title: "International Expansion",
      description:
        "Expanded our reach globally, bringing the benefits of Ayurveda to international markets.",
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description:
        "Embraced technology to make authentic Ayurveda accessible to the digital-first generation.",
    },
  ];

  teamMembers = [
    {
      name: "Dr. Ramesh Kumar",
      position: "Founder & Chief Ayurvedic Physician",
      image: "assets/images/IMG-20250327-WA0019.jpg",
      bio: "With 35+ years of experience in Ayurvedic medicine, Dr. Kumar combines traditional knowledge with modern scientific approaches.",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Head of Research & Development",
      image: "assets/images/IMG-20250327-WA0020.jpg",
      bio: "PhD in Pharmacognosy, Dr. Sharma leads our innovative product development and scientific validation processes.",
    },
    {
      name: "Rajiv Mehta",
      position: "Operations Director",
      image: "assets/images/IMG-20250327-WA0021.jpg",
      bio: "Ensuring that all SBMA products are manufactured with the highest standards of quality and sustainability.",
    },
  ];
}
