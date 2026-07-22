import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-cta",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./cta.component.html",
  styleUrl: "./cta.component.css",
})
export class CtaComponent {
  appointmentModalOpen = false;
  appointmentSubmitted = false;
  appointment = {
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  };

  readonly availableTimes = [
    "09:00",
    "10:30",
    "12:00",
    "14:00",
    "15:30",
    "17:00",
  ];

  get minimumDate(): string {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${today.getFullYear()}-${month}-${day}`;
  }

  openAppointmentModal(): void {
    this.appointmentModalOpen = true;
    this.appointmentSubmitted = false;
  }

  closeAppointmentModal(): void {
    this.appointmentModalOpen = false;
    this.appointmentSubmitted = false;
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeAppointmentModal();
    }
  }

  submitAppointment(): void {
    this.appointmentSubmitted = true;
  }
}
