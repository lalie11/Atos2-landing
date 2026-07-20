import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { OffersService } from '../../services/offers.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  constructor(public offersService: OffersService) {}

  openOffer(key: string): void {
    this.offersService.open(key);
  }
}
