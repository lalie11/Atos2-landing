import { CommonModule } from "@angular/common";
import { Component, HostListener, signal } from "@angular/core";
import { SITE_CONFIG } from "../../config/site.config";
import { SignupModalService } from "../../services/signup-modal.service";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  readonly site = SITE_CONFIG;

  /** Remplace navbar.classList.toggle('scrolled', ...) */
  readonly scrolled = signal(false);
  /** Remplace navLinks.classList.toggle('open') */
  readonly menuOpen = signal(false);

  constructor(public signupModalService: SignupModalService) {}

  @HostListener("window:scroll")
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  openSignupModal(): void {
    this.signupModalService.open();
    this.closeMenu();
  }

  closeSignupModal(): void {
    this.signupModalService.close();
  }

  onBackdropClick(event: MouseEvent): void {
    this.signupModalService.onBackdropClick(event);
  }

  onSignupSubmit(event: Event): void {
    this.signupModalService.submit(event);
  }
}
