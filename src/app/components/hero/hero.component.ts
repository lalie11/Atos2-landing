import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { SITE_CONFIG } from "../../config/site.config";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly site = SITE_CONFIG;
  readonly slides = [
    "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
  ];
  readonly currentSlide = signal(0);
  private intervalId: number | undefined;

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
    }
  }
}
