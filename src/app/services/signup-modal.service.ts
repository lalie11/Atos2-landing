import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SignupModalService {
  readonly signupModalOpen = signal(false);
  readonly formSubmitted = signal(false);

  open(): void {
    this.signupModalOpen.set(true);
    this.formSubmitted.set(false);
  }

  close(): void {
    this.signupModalOpen.set(false);
    this.formSubmitted.set(false);
  }

  submit(event: Event): void {
    event.preventDefault();
    this.formSubmitted.set(true);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
}
