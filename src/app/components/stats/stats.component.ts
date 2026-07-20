import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

interface Stat {
  number: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {
  readonly stats: Stat[] = [
    {
      number: '100+',
      title: 'Projets livrés',
      text: 'Des missions menées à terme, de la conception au déploiement.',
    },
    {
      number: '98%',
      title: 'Taux de satisfaction',
      text: 'Mesuré à chaque fin de mission auprès de nos clients.',
    },
    {
      number: '20+',
      title: 'Partenaires technologiques',
      text: 'Un écosystème de constructeurs et d’éditeurs de référence.',
    },
  ];
}
