import { Component } from "@angular/core";
import { NgFor, NgClass } from "@angular/common";

interface Certification {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: "app-certifications",
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: "./certifications.component.html",
  styleUrls: ["./certifications.component.scss"],
})
export class CertificationsComponent {
  certifications: Certification[] = [
    {
      title: "GMP Certified",
      description:
        "Good Manufacturing Practice certification ensures our products meet strict quality standards",
      icon: "fa-check-circle",
    },
    {
      title: "ISO 9001:2015",
      description: "International certification for Quality Management Systems",
      icon: "fa-certificate",
    },
    {
      title: "FSSAI Approved",
      description:
        "Food Safety and Standards Authority of India validation for safe consumption",
      icon: "fa-shield",
    },

    {
      title: "Ayush Premium Mark",
      description: "Recognition for premium quality Ayurvedic products",
      icon: "fa-star",
    },
  ];
}
