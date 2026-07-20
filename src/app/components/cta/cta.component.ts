import { Component } from "@angular/core";
import { SignupModalService } from "../../services/signup-modal.service";

@Component({
  selector: "app-cta",
  standalone: true,
  imports: [],
  templateUrl: "./cta.component.html",
  styleUrl: "./cta.component.css",
})
export class CtaComponent {
  constructor(public signupModalService: SignupModalService) {}

  openSignupModal(): void {
    this.signupModalService.open();
  }
}
