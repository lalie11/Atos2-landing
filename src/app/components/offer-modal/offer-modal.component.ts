import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-offer-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-modal.component.html',
  styleUrl: './offer-modal.component.css',
})
export class OfferModalComponent {
  constructor(public offersService: OffersService) {}

  close(): void {
    this.offersService.close();
  }

  /** Ferme la modale au clic sur le fond (remplace window click listener) */
  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
}
