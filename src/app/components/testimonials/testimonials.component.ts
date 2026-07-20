import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  readonly testimonials: Testimonial[] = [
    {
      text: "L'équipe a su s'intégrer rapidement à nos process et apporter des conseils concrets sur nos projets.",
      initials: 'SM',
      name: 'Sarah M.',
      role: 'Data Analyst',
    },
    {
      text: 'Les services sont excellents et adaptés aux projets et aux besoins réels de mon entreprise.',
      initials: 'KD',
      name: 'Koffi D.',
      role: 'Directeur Technique',
    },
    {
      text: 'Une expérience premium qui m’a permis de nouvelles opportunités pour mon entreprise.',
      initials: 'AT',
      name: 'Aminata T.',
      role: 'Directrice Marketing',
    },
  ];
}
