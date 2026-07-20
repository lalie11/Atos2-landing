import { Injectable, signal } from '@angular/core';
import { SITE_CONFIG } from '../config/site.config';

export interface Offer {
  key: string;
  number: string;
  title: string;
  text: string;
  services: string[];
}

/**
 * Remplace l'objet `offers` du script.js original ainsi que les fonctions
 * openOffer() / closeOffer(). L'offre actuellement ouverte est exposée
 * via un signal que le composant OfferModalComponent consomme.
 */
@Injectable({ providedIn: 'root' })
export class OffersService {
  readonly offers: Offer[] = [
    {
      key: 'ia',
      number: '01',
      title: 'Intelligence Artificielle',
      text: "Nous concevons des systèmes d'IA appliquée qui s'intègrent à vos processus existants et produisent une valeur mesurable dès les premiers mois.",
      services: [
        'Assistants conversationnels',
        'Modèles de machine learning',
        'Analyse prédictive',
        'Vision par ordinateur',
        "Automatisation des tâches à faible valeur ajoutée",
      ],
    },
    {
      key: 'digital',
      number: '02',
      title: 'Transformation Digitale',
      text: "Nous repensons vos parcours et vos outils pour gagner en agilité, sans rupture avec votre écosystème existant.",
      services: [
        'Digitalisation des processus métier',
        'Applications web et mobile',
        'Conseil en stratégie digitale',
        'Automatisation des workflows',
        'Plateformes collaboratives',
      ],
    },
    {
      key: 'cloud',
      number: '03',
      title: 'Cloud & Infrastructure',
      text: 'Des environnements cloud dimensionnés pour votre charge réelle, avec la disponibilité et la sécurité que vos activités exigent.',
      services: [
        'Migration vers le cloud',
        'Architectures hybrides',
        'Stockage et sauvegarde',
        'Administration systèmes',
        'Durcissement des serveurs',
      ],
    },
    {
      key: 'cyber',
      number: '04',
      title: 'Cybersécurité',
      text: 'Nous évaluons, renforçons et surveillons votre posture de sécurité face à des menaces en constante évolution.',
      services: [
        'Audits de sécurité',
        'Protection des données sensibles',
        "Tests d'intrusion",
        "Supervision du système d'information",
        'Sécurisation des réseaux',
      ],
    },
    {
      key: 'data',
      number: '05',
      title: 'Data',
      text: 'Nous transformons vos données brutes en indicateurs exploitables pour éclairer chaque décision.',
      services: [
        'Ingénierie de la donnée',
        'Traitement de gros volumes (Big Data)',
        'Tableaux de bord décisionnels',
        'Business Intelligence',
        'Analyse avancée et modélisation',
      ],
    },
    {
      key: 'formation',
      number: '06',
      title: SITE_CONFIG.academyName,
      text: `${SITE_CONFIG.academyName} forme les talents numériques de demain à travers des parcours pratiques et certifiants.`,
      services: [
        "Bootcamps intelligence artificielle",
        'Cloud Computing',
        'Cybersécurité',
        'Data Science',
        'Accompagnement à l’insertion professionnelle',
      ],
    },
  ];

  /** Offre actuellement affichée dans la modale (null = fermée) */
  readonly activeOffer = signal<Offer | null>(null);

  open(key: string): void {
    const offer = this.offers.find((o) => o.key === key) ?? null;
    this.activeOffer.set(offer);
  }

  close(): void {
    this.activeOffer.set(null);
  }
}
