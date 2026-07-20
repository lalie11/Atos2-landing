import { CommonModule } from "@angular/common";
import { Component, signal } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { SITE_CONFIG } from "../../config/site.config";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.css",
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly site = SITE_CONFIG;
  readonly showMap = signal(false);

  // Coordonnées précises : 267 Rue Bernard N'Doumi, Abidjan
  private readonly latitude = 5.3693057403843945;
  private readonly longitude = -3.967971294116085;

  readonly mapsEmbedUrl: SafeResourceUrl;
  readonly mapsExternalLink: string;

  constructor(private readonly sanitizer: DomSanitizer) {
    const rawEmbedUrl = `https://www.google.com/maps?q=${this.latitude},${this.longitude}&z=18&output=embed`;
    this.mapsEmbedUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(rawEmbedUrl);
    this.mapsExternalLink = `https://www.google.com/maps?q=${this.latitude},${this.longitude}`;
  }

  toggleMap(): void {
    this.showMap.update((value) => !value);
  }
}
