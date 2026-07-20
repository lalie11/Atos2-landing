# Landing Page ATOS (Angular)

Portage 100% Angular (standalone components, Angular 18) d'une landing page
de cabinet de conseil / ESN. Chaque section est un composant isolé, avec son
propre template et son propre CSS encapsulé.

> **Personnalisation de marque** : le nom "Nexova" est un nom d'exemple.
> Tous les textes, catégories d'offres et statistiques sont des contenus
> originaux inspirés des codes du secteur IT/conseil — aucun contenu n'est
> repris du site du groupe Atos. Pour adopter votre propre identité,
> modifiez uniquement `src/app/config/site.config.ts` (nom, logo, contact)
> et ajustez les textes des composants si besoin.

## Architecture

```
atos-landing/
├── src/
│   ├── index.html
│   ├── main.ts                     # bootstrap de l'app standalone
│   ├── styles.css                  # reset, variables CSS, utilitaires partagés
│   ├── assets/images/              # logos (à fournir, voir README.txt du dossier)
│   └── app/
│       ├── app.component.ts/html/css     # racine, assemble toutes les sections
│       ├── app.config.ts                 # providers globaux
│       ├── components/
│       │   ├── navbar/             # navbar sticky, burger menu, scroll state
│       │   ├── hero/                # section hero
│       │   ├── about/               # mission + logos partenaires (*ngFor)
│       │   ├── services/            # grille des 6 offres
│       │   ├── offer-modal/         # modale "Découvrir" pilotée par un signal
│       │   ├── stats/               # statistiques (100+, 98%, 20+)
│       │   ├── testimonials/        # témoignages clients
│       │   ├── cta/                 # appel à l'action final
│       │   ├── footer/              # pied de page
│       │   └── toast/               # notifications (remplace showToast())
│       ├── directives/
│       │   └── reveal-on-scroll.directive.ts   # remplace l'IntersectionObserver du script.js
│       ├── config/
│       │   └── site.config.ts       # identité de marque centralisée (nom, logo, contact)
│       └── services/
│           ├── offers.service.ts    # données des 6 offres + état de la modale
│           └── toast.service.ts     # état des notifications (signal)
├── angular.json
├── package.json
├── tsconfig.json / tsconfig.app.json
└── .gitignore
```

## Correspondance avec le code d'origine

| Fichier original           | Équivalent Angular                                            |
|-----------------------------|-----------------------------------------------------------------|
| `index.html` (sections)     | Un composant standalone par section                            |
| `style.css`                 | `styles.css` (variables/reset/commun) + un `.css` par composant|
| `script.js` → offers{}      | `OffersService` (données + signal `activeOffer`)                |
| `script.js` → openOffer/closeOffer | Méthodes `open()`/`close()` de `OffersService` + `OfferModalComponent` |
| `script.js` → navbar scroll/burger | `NavbarComponent` (`@HostListener`, signals `scrolled`/`menuOpen`) |
| `script.js` → showToast()   | `ToastService` (signal) + `ToastComponent`                     |
| `script.js` → reveal on scroll | `RevealOnScrollDirective` (`appReveal`, réutilisable partout)|

## Installation et lancement

```bash
npm install
npm start        # http://localhost:4200
```

## Build de production

```bash
npm run build:prod
```

Le résultat est généré dans `dist/atos-landing/`.

## Personnaliser votre marque

Un seul fichier à éditer : `src/app/config/site.config.ts`.

```ts
export const SITE_CONFIG = {
  companyName: 'Nexova',
  companyFullName: 'Nexova Digital',
  companyTagline: "Cabinet de conseil et d'ingénierie numérique",
  logo: 'assets/images/logo.png',
  academyName: 'Nexova Academy',
  contact: { email: '...', phone: '...', address: '...' },
  // ...
};
```

Le nom, le logo et les coordonnées se propagent automatiquement dans la
navbar, la section "À propos", le footer et l'offre "Académie". Les textes
des sections (hero, mission, offres, stats, CTA) sont volontairement écrits
en dur dans chaque composant pour rester faciles à retoucher un par un —
n'hésitez pas à les adapter à votre ton de marque.

## Notes

- Les composants sont **standalone** (pas de `NgModule`), conformément aux
  bonnes pratiques Angular 17/18.
- L'état (menu mobile, scroll navbar, offre active, toast) est géré avec des
  **signals** Angular plutôt que des variables globales comme dans le
  `script.js` d'origine.
- La section "Services" et la modale d'offres, commentées dans le HTML
  fourni, ont été réactivées et branchées sur `OffersService` puisque les
  données existaient déjà dans `script.js`. Vous pouvez les retirer de
  `app.component.html` si vous ne souhaitez pas les afficher.
- Pensez à déposer vos logos dans `src/assets/images/` (voir le fichier
  `README.txt` de ce dossier pour la liste exacte des noms attendus).
