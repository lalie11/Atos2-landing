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
        "Partenaire technologique présent dans notre réseau de collaboration.",

      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Sage-logo.jpg",
      alt: "SAGE",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "kapptivate-logo.jpg",
      alt: "KAPPTIVATE",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],  
    },
    {
      file: "Arabsoft-logo.png",
      alt: "ARABSOFT",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],  
    },
    {
      file: "Bull-logo.jpg",
      alt: "BULL",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],      
    },
    {
      file: "Dell-logo.jpg",
      alt: "DELL",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Denodo-logo.png",
      alt: "DENODO",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],  
    },
    {
      file: "Eviden-logo.jpg",
      alt: "EVIDEN",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],  
    },
    {
      file: "Fmc-logo.jpg",
      alt: "FMC",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],  
    },
    {
      file: "Marble-logo.png",
      alt: "MARBLE",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],  
    },
    {
      file: "Microsoft-logo.jpg",
      alt: "MICROSOFT",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Nutanix-logo.png",
      alt: "NUTANIX",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Sap-logo.jpg",
      alt: "SAP",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Technology-logo.jpg",
      alt: "TECHNOLOGY",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Vmware-logo.png",
      alt: "VMWARE",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Backbase-logo.png",
      alt: "BACKBASE",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Commvault-logo.jpg",
      alt: "COMMVAULT",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Juniper-logo.png",
      alt: "JUNIPER",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Liferay-logo.png",
      alt: "LIFERAY",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "OracleSun-logo.png",
      alt: "ORACLE/SUN",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],  
    },
    {
      file: "RedHat-logo.png",
      alt: "RED HAT",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "UiPath-logo.png",
      alt: "UiPath",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "Veeam-logo.png",
      alt: "Veeam",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
      ],
    },
    {
      file: "WSO2-logo.png",
      alt: "WSO2",
      description:
        "Partenaire technologique présent dans notre réseau de collaboration.",
      UseCase: [
        "Bootcamps intelligence artificielle",
        "Cloud Computing",
        "Cybersécurité",
        "Data Science",
        "Accompagnement à l’insertion professionnelle",
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
