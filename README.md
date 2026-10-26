# Portfolio — Mawa DIAW

Portfolio personnel de géomaticien / développeur SIG, en ligne sur **[mawa399.github.io](https://mawa399.github.io/)**.

Site 100 % statique (HTML, CSS, JavaScript sans framework), bilingue français / anglais, avec mode clair / sombre.

Les logos des outils proviennent de [Simple Icons](https://simpleicons.org/) (CC0) et de [Devicon](https://devicon.dev/) (MIT).

- Projets filtrables (Web SIG, analyse spatiale, automatisation) avec une fiche détaillée par projet et un lien partageable (`#identifiant`, par exemple `#predire`)
- Sections À propos, Projets, Compétences, Expériences, Contact
- Aperçu soigné quand on partage le lien sur LinkedIn (image `og-image.png`)
- Responsive et accessible (navigation clavier, contrastes, animations réduites si demandé)

## Arborescence

```
mawa399.github.io/
├── index.html              structure de la page
├── favicon.svg             icône de l'onglet
├── robots.txt, sitemap.xml référencement
├── .nojekyll               GitHub Pages sert les fichiers tels quels
└── assets/
    ├── css/styles.css      apparence (couleurs en haut du fichier)
    ├── js/content.js       ★ TOUS LES TEXTES (FR + EN), projets, expériences
    ├── js/main.js          logique (langue, thème, fiches projet, formulaire)
    ├── img/og-image.png    aperçu de partage (1200 × 630)
    ├── img/photo.jpg       photo de profil
    ├── img/projets/        captures des projets
    ├── img/logos/          logos des outils (section Compétences)
    └── cv/CV-Mawa-DIAW.pdf CV téléchargeable
```

## Lancer en local

```bash
cd mawa399.github.io
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

## Personnaliser

**Modifier un texte** : tout est dans `assets/js/content.js`, en deux versions `fr` et `en`.

**Ajouter un projet** : dans `content.js`, copier un bloc de `PROJECTS` puis adapter les champs.

| Champ | Rôle |
|---|---|
| `id` | identifiant unique, sans espace ni accent |
| `categories` | filtres : `"web"`, `"analysis"`, `"auto"` |
| `pro` | `true` affiche le badge « En entreprise » |
| `image` | image de la carte ; si vide, un visuel est généré (`cover` : `contours`, `network`, `grid`, `flow`) |
| `screenshots` | captures affichées dans la fiche (galerie cliquable) |
| `github` | lien du dépôt → bouton **Code** · `"prive"` → mention « Code confidentiel » · `""` → rien |
| `demo` | lien d'une démo en ligne → bouton **Démo** |
| `stack` | technologies affichées en étiquettes |

**Photo** : déposer une image carrée nommée `photo.jpg` dans `assets/img/`. Sans photo, les initiales s'affichent.

**CV** : déposer le PDF sous le nom `CV-Mawa-DIAW.pdf` dans `assets/cv/`.

**Couleurs** : modifier les variables en haut de `assets/css/styles.css` (mode clair puis mode sombre).

## Formulaire de contact

Le formulaire ouvre la messagerie du visiteur avec le message prérempli, adressé à mawadiaw1@gmail.com. Aucun service tiers n'est utilisé.

---

Conçu et développé par Mawa DIAW.
