/**
 * Configuration centrale de l'identité de marque du site.
 * Modifiez uniquement ce fichier pour personnaliser le nom de votre société,
 * son slogan, ses coordonnées et le nom de son programme de formation —
 * sans avoir à toucher aux composants.
 */
export const SITE_CONFIG = {
  companyName: 'Atos', 
  companyFullName: 'Atos Digital',
  companyTagline: "Nous vous accompagnons dans votre transformation digitale",
  country: "Côte d'Ivoire",
  city: 'Abidjan',

  logo: 'assets/images/atos-logo.jpg',

  academyName: 'ADA — Atos Digital Academy',

  contact: {
    email: 'contact@atos.ci',
    phone: '+225 00 00 00 00',
    address: "Abidjan, Côte d'Ivoire",
  },

  social: {
    linkedin: '#',
    twitter: '#',
    facebook: '#',
  },
} as const;
