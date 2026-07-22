import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RevealOnScrollDirective } from "../../directives/reveal-on-scroll.directive";

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
}

@Component({
  selector: "app-testimonials",
  standalone: true,
  imports: [CommonModule, FormsModule, RevealOnScrollDirective],
  templateUrl: "./testimonials.component.html",
  styleUrl: "./testimonials.component.css",
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      text: "L'équipe a su s'intégrer rapidement à nos process et apporter des conseils concrets sur nos projets.",
      initials: "SM",
      name: "Sarah M.",
      role: "Data Analyst",
    },
    {
      text: "Les services sont excellents et adaptés aux projets et aux besoins réels de mon entreprise.",
      initials: "KD",
      name: "Koffi D.",
      role: "Directeur Technique",
    },
    {
      text: "Une expérience premium qui m’a permis de nouvelles opportunités pour mon entreprise.",
      initials: "AT",
      name: "Aminata T.",
      role: "Directrice Marketing",
    },
  ];

  isFormVisible = false;
  formSubmitted = false;
  newTestimonial = {
    name: "",
    role: "",
    text: "",
  };

  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
    this.formSubmitted = false;
  }

  addTestimonial(): void {
    const name = this.newTestimonial.name.trim();
    const role = this.newTestimonial.role.trim();
    const text = this.newTestimonial.text.trim();

    if (!name || !role || !text) {
      this.formSubmitted = true;
      return;
    }

    const initials = name
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    this.testimonials = [...this.testimonials, { name, role, text, initials }];
    this.newTestimonial = { name: "", role: "", text: "" };
    this.formSubmitted = false;
    this.isFormVisible = false;
  }
}
