import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { SITE_CONFIG } from "../../config/site.config";

interface HeroSlide {
  type: "image" | "video";
  source: string;
}

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./hero.component.html",
  styleUrl: "./hero.component.css",
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly site = SITE_CONFIG;
  readonly slides: HeroSlide[] = [
    { type: "image", source: "assets/images/bureau.jpg" },
    { type: "image", source: "assets/images/Partenariat.jpg" },
    { type: "image", source: "assets/images/Couloir.jpg" },
    { type: "image", source: "assets/images/salutation.jpg" },
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
