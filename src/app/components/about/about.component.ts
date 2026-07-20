import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';
import { SITE_CONFIG } from '../../config/site.config';

interface PartnerLogo {
  file: string;
  alt: string;
}

interface AboutCard {
  title: string;
  text: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  readonly site = SITE_CONFIG;

  readonly cards: AboutCard[] = [
    {
      title: 'Approche terrain',
      text: 'Des équipes immergées dans vos enjeux métier, pour des livrables qui collent à votre réalité opérationnelle.',
    },
    {
      title: 'Expertise multi-sectorielle',
      text: 'Un accompagnement de bout en bout, du cadrage à la mise en production, avec des standards de qualité mesurables.',
    },
    {
      title: 'Engagement de résultats',
      text: 'Des indicateurs de performance définis dès le départ pour objectiver la valeur créée à chaque étape.',
    },
  ];

  readonly partners: PartnerLogo[] = [
    { file: 'Huawei-logo.jpg', alt: 'Logo HUAWEI' },
    { file: 'Sage-logo.jpg', alt: 'Logo SAGE' },
    { file: 'kapptivate-logo.jpg', alt: 'Logo KAPPTIVATE' },
    { file: 'Arabsoft-logo.png', alt: 'Logo ARABSOFT' },
    { file: 'Bull-logo.jpg', alt: 'Logo BULL' },
    { file: 'Dell-logo.jpg', alt: 'Logo DELL' },
    { file: 'Denodo-logo.png', alt: 'Logo DENODO' },
    { file: 'Eviden-logo.jpg', alt: 'Logo EVIDEN' },
    { file: 'Fmc-logo.jpg', alt: 'Logo FMC' },
    { file: 'Marble-logo.png', alt: 'Logo MARBLE' },
    { file: 'Microsoft-logo.jpg', alt: 'Logo MICROSOFT' },
    { file: 'Nutanix-logo.png', alt: 'Logo NUTANIX' },
    { file: 'Sap-logo.jpg', alt: 'Logo SAP' },
    { file: 'Technology-logo.jpg', alt: 'Logo TECHNOLOGY' },
    { file: 'Vmware-logo.png', alt: 'Logo Vmware' },
    { file: 'Backbase-logo.png', alt: 'Logo Backbase' },
    { file: 'Commvault-logo.jpg', alt: 'Logo Commvault' },
    { file: 'Juniper-logo.png', alt: 'Logo JUNIPER' },
    { file: 'Liferay-logo.png', alt: 'Logo LIFERAY' },
    { file: 'OracleSun-logo.png', alt: 'Logo ORACLE/SUN' },
    { file: 'RedHat-logo.png', alt: 'Logo RED HAT' },
    { file: 'UiPath-logo.png', alt: 'Logo UiPath' },
    { file: 'Veeam-logo.png', alt: 'Logo Veeam' },
    { file: 'WSO2-logo.png', alt: 'Logo WSO2' },
  ];
}
