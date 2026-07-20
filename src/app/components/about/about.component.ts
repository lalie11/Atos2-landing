import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RevealOnScrollDirective } from "../../directives/reveal-on-scroll.directive";
import { SITE_CONFIG } from "../../config/site.config";

interface PartnerLogo {
  file: string;
  alt: string;
  description: string;
  UseCase: string[];
}

interface AboutCard {
  title: string;
  text: string;
}

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  readonly site = SITE_CONFIG;
  selectedPartner: PartnerLogo | null = null;

  readonly cards: AboutCard[] = [
    {
      title: "Approche terrain",
      text: "Des équipes immergées dans vos enjeux métier, pour des livrables qui collent à votre réalité opérationnelle.",
    },
    {
      title: "Expertise multi-sectorielle",
      text: "Un accompagnement de bout en bout, du cadrage à la mise en production, avec des standards de qualité mesurables.",
    },
    {
      title: "Engagement de résultats",
      text: "Des indicateurs de performance définis dès le départ pour objectiver la valeur créée à chaque étape.",
    },
  ];

  readonly partners: PartnerLogo[] = [
    {
      file: "Huawei-logo.jpg",
      alt: "HUAWEI",
      description:
        "Atos collabore avec Huawei pour proposer des infrastructures cloud, des solutions réseau et des plateformes numériques performantes destinées aux entreprises et aux administrations.",
      UseCase: [
        "Déploiement d'infrastructures Cloud",
        "Solutions Smart City",
        "Modernisation des datacenters",
        "Transformation numérique des entreprises",
        "Formation aux technologies Huawei",
      ],
    },
    {
      file: "Sage-logo.jpg",
      alt: "SAGE",
      description:
        "Atos accompagne l'intégration des solutions Sage afin d'optimiser la gestion financière, comptable et des ressources humaines des organisations.",
      UseCase: [
        "Déploiement Sage X3",
        "Digitalisation de la comptabilité",
        "Gestion RH",
        "Reporting financier",
        "Maintenance et support ERP",
      ],
    },
    {
      file: "kapptivate-logo.jpg",
      alt: "KAPPTIVATE",
      description:
        "Atos peut s'appuyer sur Kapptivate pour concevoir des expériences digitales innovantes, centrées sur l'utilisateur et la performance des applications.",
      UseCase: [
        "Conception UX/UI",
        "Applications web et mobiles",
        "Transformation digitale",
        "Innovation digitale",
        "Optimisation de l'expérience utilisateur",
      ],
    },
    {
      file: "Arabsoft-logo.png",
      alt: "ARABSOFT",
      description:
        "Atos peut collaborer avec ArabSoft pour accompagner les administrations et les entreprises dans la modernisation de leurs systèmes d'information.",
      UseCase: [
        "E-Gouvernement",
        "Applications métiers",
        "Transformation numérique",
        "Gestion documentaire",
        "Services publics numériques",
      ],
    },
    {
      file: "Bull-logo.jpg",
      alt: "BULL",
      description:
        "Grâce aux technologies Bull, marque d'Eviden, Atos fournit des infrastructures critiques, des supercalculateurs et des solutions de cybersécurité de haute performance.",
      UseCase: [
        "Calcul haute performance (HPC)",
        "Datacenters critiques",
        "Cybersécurité",
        "Calcul scientifique",
        "Cloud souverain",
      ],
    },
    {
      file: "Dell-logo.jpg",
      alt: "DELL",
      description:
        "Atos s'appuie sur les solutions Dell Technologies pour moderniser les infrastructures informatiques, le stockage et les environnements cloud hybrides.",
      UseCase: [
        "Serveurs Dell",
        "Stockage de données",
        "Virtualisation",
        "Cloud hybride",
        "Postes de travail professionnels",
      ],
    },
    {
      file: "Denodo-logo.png",
      alt: "DENODO",
      description:
        "Atos exploite les technologies Denodo afin de faciliter la virtualisation des données et d'améliorer leur accès en temps réel.",
      UseCase: [
        "Virtualisation des données",
        "Data Analytics",
        "Business Intelligence",
        "Intégration de données",
        "Gouvernance des données",
      ],
    },
    {
      file: "Eviden-logo.jpg",
      alt: "EVIDEN",
      description:
        "Filiale du groupe Atos, Eviden accompagne les organisations dans les domaines du cloud, du Big Data, de l'intelligence artificielle et de la cybersécurité.",
      UseCase: [
        "Cybersécurité",
        "Cloud Computing",
        "Intelligence Artificielle",
        "Big Data",
        "Supercalculateurs",
      ],
    },
    {
      file: "Fmc-logo.jpg",
      alt: "FMC",
      description:
        "Atos peut collaborer avec FMC afin d'accélérer la digitalisation des processus métiers et l'amélioration des performances opérationnelles.",
      UseCase: [
        "Transformation digitale",
        "Optimisation des processus",
        "Gestion documentaire",
        "Solutions métiers",
        "Accompagnement des entreprises",
      ],
    },
    {
      file: "Marble-logo.png",
      alt: "MARBLE",
      description:
        "Atos peut développer des solutions innovantes avec Marble pour accélérer les projets numériques et améliorer l'expérience digitale des utilisateurs.",
      UseCase: [
        "Applications digitales",
        "Innovation numérique",
        "Expérience utilisateur",
        "Transformation digitale",
        "Développement logiciel",
      ],
    },
    {
      file: "Microsoft-logo.jpg",
      alt: "MICROSOFT",
      description:
        "Partenaire stratégique de Microsoft, Atos accompagne les entreprises dans l'adoption du cloud Azure, de Microsoft 365 et des solutions d'intelligence artificielle.",
      UseCase: [
        "Microsoft Azure",
        "Microsoft 365",
        "Power Platform",
        "Copilot IA",
        "Migration Cloud",
      ],
    },
    {
      file: "Nutanix-logo.png",
      alt: "NUTANIX",
      description:
        "Atos déploie les solutions Nutanix afin de simplifier la gestion des infrastructures hyperconvergées et des environnements cloud hybrides.",
      UseCase: [
        "Infrastructure hyperconvergée",
        "Cloud hybride",
        "Virtualisation",
        "Modernisation des datacenters",
        "Continuité d'activité",
      ],
    },
    {
      file: "Sap-logo.jpg",
      alt: "SAP",
      description:
        "Atos accompagne les entreprises dans le déploiement, la migration et l'évolution des solutions SAP afin d'améliorer leurs performances métiers.",
      UseCase: [
        "SAP S/4HANA",
        "ERP",
        "Finance",
        "Supply Chain",
        "Migration SAP",
      ],
    },
    {
      file: "Technology-logo.jpg",
      alt: "TECHNOLOGY",
      description:
        "Atos développe des partenariats technologiques afin d'accompagner les entreprises dans leurs projets d'innovation et de transformation numérique.",
      UseCase: [
        "Innovation digitale",
        "Cloud",
        "Cybersécurité",
        "Développement logiciel",
        "Conseil IT",
      ],
    },
    {
      file: "Vmware-logo.png",
      alt: "VMWARE",
      description:
        "Atos utilise les solutions VMware pour concevoir des infrastructures virtualisées, sécurisées et adaptées aux besoins des entreprises modernes.",
      UseCase: [
        "Virtualisation",
        "Cloud privé",
        "Cloud hybride",
        "Modernisation IT",
        "Infrastructure sécurisée",
      ],
    },
    {
      file: "Backbase-logo.png",
      alt: "BACKBASE",
      description:
        "Atos accompagne les institutions financières dans la mise en œuvre des plateformes digitales Backbase pour améliorer l'expérience client.",
      UseCase: [
        "Banque digitale",
        "Portail client",
        "Mobile Banking",
        "Expérience utilisateur",
        "Transformation bancaire",
      ],
    },
    {
      file: "Commvault-logo.jpg",
      alt: "COMMVAULT",
      description:
        "Atos s'appuie sur Commvault afin de protéger les données critiques et garantir leur disponibilité en toutes circonstances.",
      UseCase: [
        "Sauvegarde des données",
        "Disaster Recovery",
        "Archivage",
        "Protection Cloud",
        "Continuité d'activité",
      ],
    },
    {
      file: "Juniper-logo.png",
      alt: "JUNIPER",
      description:
        "Atos déploie les technologies Juniper Networks afin d'assurer des infrastructures réseau performantes, sécurisées et évolutives.",
      UseCase: [
        "Infrastructure réseau",
        "SD-WAN",
        "Sécurité réseau",
        "Datacenter",
        "Automatisation réseau",
      ],
    },
    {
      file: "Liferay-logo.png",
      alt: "LIFERAY",
      description:
        "Atos développe des portails d'entreprise et des plateformes collaboratives grâce aux solutions Liferay.",
      UseCase: [
        "Portail collaboratif",
        "Intranet",
        "Extranet",
        "Gestion documentaire",
        "Digital Workplace",
      ],
    },
    {
      file: "OracleSun-logo.png",
      alt: "ORACLE/SUN",
      description:
        "Atos accompagne les organisations dans l'intégration des solutions Oracle afin de moderniser leurs bases de données, leurs applications et leurs infrastructures cloud.",
      UseCase: [
        "Oracle Database",
        "Oracle Cloud",
        "ERP Oracle",
        "Java Enterprise",
        "Migration des données",
      ],
    },
    {
      file: "RedHat-logo.png",
      alt: "RED HAT",
      description:
        "Atos exploite les technologies Red Hat pour accélérer l'automatisation, la conteneurisation et le déploiement d'applications cloud natives.",
      UseCase: [
        "OpenShift",
        "Linux Enterprise",
        "DevOps",
        "Kubernetes",
        "Cloud hybride",
      ],
    },
    {
      file: "UiPath-logo.png",
      alt: "UiPath",
      description:
        "Atos accompagne les entreprises dans l'automatisation intelligente de leurs processus grâce aux solutions de Robotic Process Automation (RPA) de UiPath.",
      UseCase: [
        "Robotic Process Automation",
        "Automatisation des processus",
        "Intelligence Artificielle",
        "Optimisation opérationnelle",
        "Productivité",
      ],
    },
    {
      file: "Veeam-logo.png",
      alt: "Veeam",
      description:
        "Atos s'appuie sur Veeam pour assurer la sauvegarde, la restauration et la résilience des données dans les environnements hybrides.",
      UseCase: [
        "Backup Cloud",
        "Restauration rapide",
        "Protection des données",
        "Continuité d'activité",
        "Cyber-résilience",
      ],
    },
    {
      file: "WSO2-logo.png",
      alt: "WSO2",
      description:
        "Atos utilise WSO2 pour développer des architectures API sécurisées et faciliter l'intégration des systèmes d'information.",
      UseCase: [
        "API Management",
        "Intégration applicative",
        "Microservices",
        "Authentification",
        "Transformation digitale",
      ],
    },
  ];

  openPartner(partner: PartnerLogo): void {
    this.selectedPartner = partner;
  }

  closePartner(): void {
    this.selectedPartner = null;
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closePartner();
    }
  }
}
