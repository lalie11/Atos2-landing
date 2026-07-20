import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { OfferModalComponent } from './components/offer-modal/offer-modal.component';
import { StatsComponent } from './components/stats/stats.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    OfferModalComponent,
    StatsComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent,
    ToastComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
