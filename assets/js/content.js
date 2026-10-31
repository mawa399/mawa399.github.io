/* =====================================================================
   content.js — TOUS LES TEXTES DU SITE (FR + EN)
   Pour modifier un texte : changez-le ici, dans "fr" ET dans "en".
   ===================================================================== */

const PROFILE = {
  name: "Mawa DIAW",
  initials: "MD",
  email: "mawadiaw1@gmail.com",
  linkedin: "https://www.linkedin.com/in/mawa-diaw",
  github: "https://github.com/mawa399",
  cv: "assets/cv/CV-Mawa-DIAW.pdf",
  photo: "assets/img/photo.jpg"   // déposez votre photo ici ; sans photo, les initiales s'affichent
};

/* ---------- Textes fixes de l'interface ---------- */
const UI = {
  fr: {
    "skip": "Aller au contenu",
    "nav.about": "À propos", "nav.projects": "Projets", "nav.skills": "Compétences", "nav.exp": "Expériences", "nav.contact": "Contact",
    "hero.status": "Disponible immédiatement",
    "hero.hello": "Bienvenue, je suis",
    "hero.title": "Géomaticien · Développeur SIG",
    "hero.pitch": "De la donnée brute à la carte en ligne : je structure, j'analyse et j'automatise pour aider décideurs et équipes à mieux agir sur leur territoire.",
    "hero.avail.k1": "Disponibilité :", "hero.avail.v1": "immédiate",
    "hero.avail.k2": "Contrat :", "hero.avail.v2": "mission, CDD ou CDI",
    "hero.avail.sub": "Basé à Saint-Denis (93)",
    "hero.f1": "d'expérience SIG", "hero.f2": "mention Très bien",
    "hero.cta.projects": "Voir mes projets", "hero.cta.cv": "Télécharger mon CV",
    "about.title": "À propos",
    "about.p1": "Titulaire d'un Master G2M (Géomatique, Géodécisionnel, Géomarketing et Multimédia) obtenu avec la mention Très bien à l'Université Paris 8, je suis géomaticien et développeur SIG avec 3 ans d'expérience en entreprise et en collectivité.",
    "about.p2": "Chez Veolia Assainissement & Maintenance France, en alternance puis comme chargé de projet géomatique, j'ai structuré les bases de données des réseaux, développé des applications web sous ArcGIS Enterprise et automatisé des tâches récurrentes : scripts Python et SQL planifiés, interfaces déployées en exécutables dans d'autres agences, formation des agents et documentation technique.",
    "about.p3": "Auparavant, au Conseil départemental de l'Hérault, j'ai travaillé sur une base SIG centralisée PostgreSQL/PostGIS, des workflows FME de contrôle qualité et un géoservice de suivi du déploiement de la fibre.",
    "about.education": "Formation", "about.languages": "Langues", "about.savoir": "Savoir-faire", "about.etre": "Savoir-être",
    "about.pipeline": "Un profil, toute la chaîne de la donnée géographique",
    "about.hobbies": "En dehors des cartes",
    "projects.title": "Projets",
    "projects.sub": "Projets réalisés en entreprise et projets personnels sur données ouvertes. Cliquez sur une carte pour voir le contexte, la démarche et les résultats.",
    "filter.all": "Tous", "filter.web": "Web SIG", "filter.analysis": "Analyse spatiale", "filter.auto": "Automatisation & data",
    "badge.pro": "En entreprise",
    "more.title": "Et d'autres projets sur GitHub", "more.text": "Plugins, scripts, analyses et cartes web : retrouvez l'ensemble de mes dépôts publics.", "more.btn": "Voir tous mes projets",
    "btn.details": "Détails", "btn.code": "Git", "btn.demo": "Démo", "btn.shots": "Captures", "btn.private": "Code confidentiel", "btn.showcase": "Vitrine",
    "modal.context": "Contexte", "modal.steps": "Démarche", "modal.results": "Résultats", "modal.stack": "Technologies", "modal.gallery": "Captures", "modal.close": "Fermer",
    "skills.title": "Compétences", "skills.sub": "Organisées par domaine. Les projets montrent comment je les combine.",
    "exp.title": "Expériences", "exp.context": "Contexte :", "exp.missions": "Missions", "exp.impact": "Impact :", "exp.link": "Voir le projet associé",
    "contact.title": "Contact", "contact.kicker": "Travaillons ensemble",
    "contact.text": "Une mission, un poste ou une question sur un projet ? Écrivez-moi, je réponds rapidement.",
    "contact.direct": "Ou directement",
    "form.name": "Nom", "form.email": "Email", "form.message": "Message", "form.send": "Envoyer le message",
    "form.note": "Le message s'ouvre dans votre messagerie, prêt à être envoyé.",
    "form.error": "Merci de remplir les trois champs avec une adresse e-mail valide.",
    "footer": "Conçu et développé par Mawa DIAW",
    "theme": "Changer de thème", "menu": "Ouvrir le menu", "lang": "Switch to English"
  },
  en: {
    "skip": "Skip to content",
    "nav.about": "About", "nav.projects": "Projects", "nav.skills": "Skills", "nav.exp": "Experience", "nav.contact": "Contact",
    "hero.status": "Available now",
    "hero.hello": "Welcome, I'm",
    "hero.title": "Geomatics Specialist · GIS Developer",
    "hero.pitch": "From raw data to online maps: I structure, analyse and automate to help decision-makers and teams act better on their territory.",
    "hero.avail.k1": "Availability:", "hero.avail.v1": "immediate",
    "hero.avail.k2": "Contract:", "hero.avail.v2": "freelance, fixed-term or permanent",
    "hero.avail.sub": "Based in Saint-Denis (93)",
    "hero.f1": "of GIS experience", "hero.f2": "highest honours",
    "hero.cta.projects": "See my projects", "hero.cta.cv": "Download my CV",
    "about.title": "About",
    "about.p1": "I hold the G2M Master's degree (Geomatics, Geo-decision, Geomarketing and Multimedia) from Paris 8 University, with highest honours, and I'm a geomatics specialist and GIS developer with 3 years of experience in industry and local government.",
    "about.p2": "At Veolia Assainissement & Maintenance France, first as an apprentice and then as GIS project officer, I structured the sewer network databases, built web applications on ArcGIS Enterprise and automated recurring tasks: scheduled Python and SQL scripts, desktop tools deployed as executables to other branches, user training and technical documentation.",
    "about.p3": "Before that, at the Hérault departmental council, I worked on a centralised PostgreSQL/PostGIS database, FME quality-control workflows and a web service tracking the fibre roll-out.",
    "about.education": "Education", "about.languages": "Languages", "about.savoir": "Know-how", "about.etre": "Soft skills",
    "about.pipeline": "One profile, the whole geographic data chain",
    "about.hobbies": "Away from maps",
    "projects.title": "Projects",
    "projects.sub": "Work projects and personal projects built on open data. Click a card to see the context, approach and results.",
    "filter.all": "All", "filter.web": "Web GIS", "filter.analysis": "Spatial analysis", "filter.auto": "Automation & data",
    "badge.pro": "Work project",
    "more.title": "More projects on GitHub", "more.text": "Plugins, scripts, analyses and web maps: browse all my public repositories.", "more.btn": "See all my projects",
    "btn.details": "Details", "btn.code": "Git", "btn.demo": "Demo", "btn.shots": "Screenshots", "btn.private": "Confidential code", "btn.showcase": "Showcase",
    "modal.context": "Context", "modal.steps": "Approach", "modal.results": "Results", "modal.stack": "Tech stack", "modal.gallery": "Screenshots", "modal.close": "Close",
    "skills.title": "Skills", "skills.sub": "Grouped by area. The projects show how I combine them.",
    "exp.title": "Experience", "exp.context": "Context:", "exp.missions": "Responsibilities", "exp.impact": "Impact:", "exp.link": "See the related project",
    "contact.title": "Contact", "contact.kicker": "Let's work together",
    "contact.text": "A role, an assignment or a question about a project? Drop me a line, I reply quickly.",
    "contact.direct": "Or directly",
    "form.name": "Name", "form.email": "Email", "form.message": "Message", "form.send": "Send message",
    "form.note": "The message opens in your email app, ready to send.",
    "form.error": "Please fill in all three fields with a valid email address.",
    "footer": "Designed and built by Mawa DIAW",
    "theme": "Toggle theme", "menu": "Open menu", "lang": "Passer en français"
  }
};

/* ---------- À propos ---------- */
const EDUCATION = [
  { fr: ["Master G2M, mention Très bien", "Université Paris 8 Vincennes-Saint-Denis", "2023 – 2025 · Saint-Denis"], en: ["G2M Master's, highest honours", "Paris 8 University", "2023 – 2025 · Saint-Denis"] },
  { fr: ["Licence professionnelle SIG Web", "Université de Perpignan – IUT de Carcassonne", "2022 – 2023 · Carcassonne"], en: ["Professional bachelor's in Web GIS", "University of Perpignan – IUT Carcassonne", "2022 – 2023 · Carcassonne"] },
  { fr: ["Licence 3 Géographie-Aménagement", "Avignon Université", "2021 – 2022 · Avignon"], en: ["Bachelor's in Geography & Planning (3rd year)", "Avignon University", "2021 – 2022 · Avignon"] },
  { fr: ["BTS Géomatique", "CEDT/G15", "2019 – 2021 · Dakar"], en: ["Vocational degree in Geomatics", "CEDT/G15", "2019 – 2021 · Dakar"] }
];

const LANGUAGES = [
  { fr: ["Français", "Courant"], en: ["French", "Fluent"] },
  { fr: ["Anglais", "B2"], en: ["English", "B2"] }
];

const SAVOIR = {
  fr: ["Recueil des besoins", "Échanges avec les clients", "Gestion de projet SIG", "Contrôle qualité des données", "Intégration des livrables prestataires", "Déploiement d'outils en exécutables", "Recette utilisateurs", "Formation des agents", "Documentation technique", "Support aux utilisateurs", "Veille technologique"],
  en: ["Requirements gathering", "Client communication", "GIS project management", "Data quality control", "Loading contractor deliverables", "Packaging tools as executables", "User acceptance testing", "User training", "Technical documentation", "User support", "Technology watch"]
};

const SAVOIR_ETRE = {
  fr: ["Autonomie", "Rigueur", "Pédagogie", "Adaptabilité", "Sens du service", "Esprit d'équipe", "Curiosité technique"],
  en: ["Autonomy", "Rigour", "Teaching skills", "Adaptability", "Service mindset", "Team spirit", "Technical curiosity"]
};

const PIPELINE = [
  { icon: "i-crosshair", fr: ["Acquisition", "Open data, API, relevés terrain avec Field Maps et Survey123."], en: ["Acquisition", "Open data, APIs, field surveys with Field Maps and Survey123."] },
  { icon: "i-database", fr: ["Bases de données", "Structurer et contrôler : PostgreSQL/PostGIS, workflows FME."], en: ["Databases", "Structure and check: PostgreSQL/PostGIS, FME workflows."] },
  { icon: "i-layers", fr: ["Analyse & cartographie", "ArcGIS Pro, QGIS, SQL spatial, calculs de réseau."], en: ["Analysis & mapping", "ArcGIS Pro, QGIS, spatial SQL, network analysis."] },
  { icon: "i-map", fr: ["Diffusion web", "ArcGIS Enterprise, Leaflet, GeoServer, tableaux de bord."], en: ["Web publishing", "ArcGIS Enterprise, Leaflet, GeoServer, dashboards."] },
  { icon: "i-workflow", fr: ["Automatisation", "Python, ArcPy, PyQGIS, tâches planifiées, exécutables."], en: ["Automation", "Python, ArcPy, PyQGIS, scheduled jobs, executables."] }
];

const HOBBIES = [
  { icon: "i-ball", fr: ["Football", "Un sport que je suis de près."], en: ["Football", "A sport I follow closely."] },
  { icon: "i-dice", fr: ["Jeux de société", "Scrabble, Uno : stratégie et bonne humeur."], en: ["Board games", "Scrabble, Uno: strategy and good fun."] },
  { icon: "i-book", fr: ["Mangas", "Lecture et découverte de nouvelles séries."], en: ["Manga", "Reading and discovering new series."] }
];

/* ---------- Projets ----------
   categories : "web", "analysis", "auto" · pro : true = badge « En entreprise »
   github : lien du dépôt · "prive" = « Code confidentiel » · "" = rien
   privateCode : true = le dépôt est une vitrine (bouton « Vitrine » + mention « Code confidentiel »)
   image : couverture · sinon "cover" génère un visuel (network, grid, flow, contours) */
const PROJECTS = [
  {
    id: "predire", categories: ["auto"], pro: true,
    image: "assets/img/projets/predire/4.jpg",
    screenshots: ["assets/img/projets/predire/4.jpg", "assets/img/projets/predire/3.jpg", "assets/img/projets/predire/2.jpg"],
    github: "https://github.com/mawa399/prediagnostic-assainissement-drone-sig", privateCode: true, demo: "",
    stack: ["Python", "PyQt5", "ArcPy", "ArcGIS Enterprise", "Field Maps", "ArcGIS Dashboards", "Excel", "API Google Drive", "PyInstaller"],
    fr: {
      kicker: "Veolia · Assainissement · Mémoire M2",
      title: "PREDIRE : prédiagnostic des réseaux d'assainissement par drone",
      summary: "Outil de bureau qui automatise tout le traitement des photos d'inspection prises par un drone dans les canalisations, jusqu'aux tronçons dans ArcGIS Enterprise.",
      context: "Un drone parcourt les canalisations et prend une photo toutes les 10 secondes. Sur une campagne de 100 km, il fallait trier, renommer, noter puis rattacher chaque image au bon tronçon, entièrement à la main.",
      steps: ["Interface PyQt5 avec un bouton par étape, un calendrier de mission, un journal en temps réel et une barre de progression", "Récupération des photos via l'API Google Drive et des tronçons inspectés depuis ArcGIS Enterprise", "Renommage contrôlé, tri des photos notées et génération des livrables", "Photos remontées en pièces jointes sur les tronçons avec ArcPy, tableau de bord de suivi des notes", "Exécutable diffusé dans d'autres agences, recettes avec les opérateurs, formation et documentation"],
      results: ["Préparation d'une mission : de 1 h – 1 h 30 à moins de 30 min", "Organisation de la notation et livrables : d'environ 1 h à 5 min", "Outil en production, utilisable sans compétence en programmation"]
    },
    en: {
      kicker: "Veolia · Sewer networks · Master's thesis",
      title: "PREDIRE: drone-based sewer pre-diagnosis",
      summary: "Desktop tool that automates the full processing of inspection photos taken by a drone inside sewer pipes, all the way to the pipe segments in ArcGIS Enterprise.",
      context: "A drone travels through the pipes and takes a photo every 10 seconds. On a 100 km campaign, every image had to be sorted, renamed, graded and linked to the right segment by hand.",
      steps: ["PyQt5 interface with one button per step, a mission calendar, a live log and a progress bar", "Photos fetched through the Google Drive API and inspected segments from ArcGIS Enterprise", "Checked renaming, sorting of graded photos and generation of deliverables", "Photos attached to the segments with ArcPy, plus a dashboard to monitor grades", "Executable rolled out to other branches, user acceptance testing, training and documentation"],
      results: ["Mission preparation: from 1 h – 1 h 30 down to under 30 min", "Grading organisation and deliverables: from about 1 h down to 5 min", "In production, usable without any programming skills"]
    }
  },
  {
    id: "hydrozoom", categories: ["web", "analysis"], pro: true,
    image: "", cover: "network", screenshots: [], github: "", demo: "",
    stack: ["ArcGIS Enterprise", "Field Maps", "ArcGIS Dashboards", "GNSS", "Excel"],
    fr: {
      kicker: "Veolia · EPT Grand Paris Grand Est",
      title: "HydroZoom : campagne d'inspection des réseaux d'assainissement",
      summary: "Suivi SIG d'une campagne d'inspection pour un territoire du Grand Paris : niveau d'encrassement et besoins de curage, de la sélection des regards aux livrables.",
      context: "Le client voulait connaître l'état d'encrassement de son réseau pour cibler les opérations de curage. J'étais chargé du volet SIG, en binôme avec le commercial.",
      steps: ["Échanges avec le client pour cadrer le besoin", "Sélection des regards à inspecter par échantillonnage", "Publication des données sur ArcGIS Enterprise et application de suivi avec indicateurs", "Application mobile de terrain avec GNSS et formation des opérateurs", "Contrôle des données remontées du terrain"],
      results: ["Livrables remis : cartes, propositions de curage, données SIG, exports Excel et synthèses", "Suivi de l'avancement de la campagne en temps réel"]
    },
    en: {
      kicker: "Veolia · Grand Paris Grand Est",
      title: "HydroZoom: sewer network inspection campaign",
      summary: "GIS management of an inspection campaign for a Greater Paris authority: clogging levels and cleaning needs, from manhole selection to deliverables.",
      context: "The client needed to know how clogged its network was in order to target cleaning work. I handled the GIS side, together with the account manager.",
      steps: ["Meetings with the client to scope the needs", "Selection of manholes to inspect by sampling", "Data published on ArcGIS Enterprise with a monitoring app and KPIs", "Mobile field app with GNSS and operator training", "Quality control of field data"],
      results: ["Deliverables: maps, cleaning proposals, GIS data, Excel exports and summaries", "Real-time monitoring of the campaign's progress"]
    }
  },
  {
    id: "erosion", categories: ["web", "analysis"], pro: false,
    image: "assets/img/projets/erosion/1.jpg",
    screenshots: ["assets/img/projets/erosion/1.jpg", "assets/img/projets/erosion/2.jpg", "assets/img/projets/erosion/3.jpg"],
    github: "https://github.com/mawa399/erosion-cotiere-saint-louis-senegal", demo: "https://mawa399.github.io/erosion-cotiere-saint-louis-senegal/app/",
    stack: ["Google Earth Engine", "CoastSat", "Python", "GeoPandas", "DSAS", "MapLibre GL JS", "Landsat", "Sentinel-2"],
    fr: {
      kicker: "Projet · Télédétection / Web SIG",
      title: "Érosion côtière à Saint-Louis du Sénégal (1984-2026)",
      summary: "Suivi du trait de côte de la Langue de Barbarie sur 42 ans à partir d'images Landsat et Sentinel-2, taux d'évolution calculés avec DSAS et application web avec curseur temporel.",
      context: "La Langue de Barbarie est une flèche sableuse qui protège Saint-Louis de l'océan. Depuis l'ouverture d'un canal de délestage en 2003, devenu une brèche, la côte recule fortement par endroits et des villages ont disparu. Il fallait mesurer où, de combien et à quelle vitesse.",
      steps: ["Extraction automatique de 616 traits de côte avec CoastSat et Google Earth Engine (Landsat 5, 7, 8 et Sentinel-2), dans Google Colab", "Filtres pour écarter la rive du fleuve et les fausses détections, découpage en quatre périodes", "Un trait de côte médian par année, calculé sur des transects tous les 50 m en Python", "Taux d'évolution avec DSAS 6.2 (bilan net, régression linéaire pondérée, intervalle de confiance à 90 %)", "Application MapLibre : traits annuels sur imagerie satellite, transects colorés par taux et graphique par transect"],
      results: ["Recul jusqu'à 7,4 m/an au sud de la flèche, soit environ 190 m depuis 1984", "Avancée jusqu'à 165 m au centre, côte stable au nord et à Guet Ndar", "Résultats DSAS concordants avec le calcul Python (corrélation de 0,97)"]
    },
    en: {
      kicker: "Project · Remote sensing / Web GIS",
      title: "Coastal erosion in Saint-Louis, Senegal (1984-2026)",
      summary: "Shoreline monitoring of the Langue de Barbarie over 42 years from Landsat and Sentinel-2 imagery, change rates computed with DSAS and a web app with a time slider.",
      context: "The Langue de Barbarie is a sand spit that shields Saint-Louis from the ocean. Since a relief channel opened in 2003 and turned into a breach, the coast has retreated sharply in places and villages have disappeared. The goal was to measure where, how much and how fast.",
      steps: ["Automatic extraction of 616 shorelines with CoastSat and Google Earth Engine (Landsat 5, 7, 8 and Sentinel-2), in Google Colab", "Filters to discard the river bank and false detections, processing split into four periods", "One median shoreline per year, computed on transects every 50 m in Python", "Change rates with DSAS 6.2 (net movement, weighted linear regression, 90% confidence interval)", "MapLibre app: yearly shorelines over satellite imagery, transects coloured by rate and a chart per transect"],
      results: ["Retreat of up to 7.4 m/yr at the south of the spit, about 190 m since 1984", "Advance of up to 165 m in the centre, stable coast in the north and at Guet Ndar", "DSAS results consistent with the Python calculation (0.97 correlation)"]
    }
  },
  {
    id: "gentilly", categories: ["web", "analysis"], pro: false,
    image: "assets/img/projets/gentilly/1.jpg",
    screenshots: ["assets/img/projets/gentilly/1.jpg", "assets/img/projets/gentilly/3.jpg", "assets/img/projets/gentilly/4.jpg", "assets/img/projets/gentilly/2.jpg"],
    github: "https://github.com/mawa399/service-parcellaire-postgis-gentilly", demo: "https://mawa399.github.io/service-parcellaire-postgis-gentilly/",
    stack: ["PostgreSQL", "PostGIS", "pgRouting", "PL/pgSQL", "pg_featureserv", "Leaflet"],
    fr: {
      kicker: "Projet · PostGIS / Web SIG",
      title: "Service parcellaire PostGIS à Gentilly (94)",
      summary: "Service web qui renvoie la fiche complète d'une parcelle : potentiel constructible selon le PLUi, temps de marche réel jusqu'aux gares, prix DVF, urbanisme, risques et relief.",
      context: "Rassembler en une seule requête tout ce qu'il faut savoir sur une parcelle, en faisant tous les calculs dans la base de données.",
      steps: ["Base PostGIS alimentée par le cadastre, la BD TOPO, DVF, le PLUi, les risques et le LiDAR HD (raster)", "Potentiel constructible calculé à partir des règles d'emprise et de hauteur du PLUi", "Temps de marche réels vers RER, métro et tram avec pgRouting", "Une fonction PL/pgSQL unique, interrogeable par adresse, coordonnées ou identifiant cadastral", "API GeoJSON avec pg_featureserv, carte Leaflet et démo en ligne"],
      results: ["1 605 parcelles analysées, dont 429 à gisement élevé ou très élevé", "Médiane de 7 minutes à pied jusqu'à la gare la plus proche", "Une fiche complète calculée en environ 14 ms"]
    },
    en: {
      kicker: "Project · PostGIS / Web GIS",
      title: "PostGIS parcel service in Gentilly (94)",
      summary: "Web service returning a full report for any parcel: building potential under the local plan, real walking times to stations, DVF prices, planning rules, risks and terrain.",
      context: "Gather everything worth knowing about a parcel in a single query, with all calculations done inside the database.",
      steps: ["PostGIS database fed with the cadastre, BD TOPO, DVF sales, local plan, risk layers and LiDAR HD (raster)", "Building potential computed from the plan's footprint and height rules", "Real walking times to RER, metro and tram stations with pgRouting", "One PL/pgSQL function, queryable by address, coordinates or parcel ID", "GeoJSON API with pg_featureserv, a Leaflet map and an online demo"],
      results: ["1,605 parcels analysed, 429 with high or very high potential", "Median walk of 7 minutes to the nearest station", "A full report computed in about 14 ms"]
    }
  },
  {
    id: "ifs", categories: ["web", "auto"], pro: false,
    image: "assets/img/projets/ifs/1.jpg", screenshots: ["assets/img/projets/ifs/1.jpg"],
    github: "https://github.com/mawa399/webmap-ifs-demo", demo: "https://mawa399.github.io/webmap-ifs-demo/",
    stack: ["Leaflet", "JavaScript", "KoboToolbox", "Python", "GitHub Actions", "Papa Parse", "Shapely", "mapshaper"],
    fr: {
      kicker: "Appel d'offres · Web SIG / Données",
      title: "Webmap de l'Initiative Fleuve Sénégal",
      summary: "Prototype de carte interactive des actions des membres de l'IFS dans le bassin du fleuve Sénégal (Sénégal, Mauritanie, Mali, Guinée), réalisé pour répondre à leur appel d'offres.",
      context: "L'IFS cherchait une webmap pour suivre les projets de ses membres et de leurs partenaires, mise à jour par des non-techniciens à partir de collectes Kobo. La démo reproduit à petite échelle toute la chaîne proposée, sur données fictives et limites administratives réelles.",
      steps: ["Carte Leaflet par unités administratives (pays, régions, niveau 2), avec bascule automatique selon le zoom", "Couches superposables : aplats, cercles proportionnels des bénéficiaires, fleuve, ouvrages OMVS, couche historique", "Filtres croisés (pays, unité, organisation, thématique, bailleur, partenaire, état, période) et volet de synthèse avec graphiques", "Mise à jour en remplaçant un seul export CSV de Kobo, contrôle qualité automatique en Python via GitHub Actions", "Page autonome référencée et mode intégration par iframe pour les sites des membres"],
      results: ["Toutes les exigences des termes de référence couvertes, plus l'export CSV et les liens partageables", "Environ 300 Ko de données, consultable sur mobile", "Mise à jour possible sans compétence technique"]
    },
    en: {
      kicker: "Tender · Web GIS / Data",
      title: "Senegal River Initiative web map",
      summary: "Interactive map prototype of the actions led by IFS members in the Senegal River basin (Senegal, Mauritania, Mali, Guinea), built for their call for tenders.",
      context: "The IFS needed a web map to track its members' and partners' projects, updated by non-technical staff from Kobo surveys. The demo reproduces the whole proposed workflow at small scale, with fictitious data on real administrative boundaries.",
      steps: ["Leaflet map by administrative units (country, region, level 2), switching automatically with zoom", "Stackable layers: choropleths, proportional beneficiary circles, river, OMVS dams, historical layer", "Cross filters (country, unit, organisation, theme, donor, partner, status, period) and a summary panel with charts", "Updated by replacing a single Kobo CSV export, with automatic Python quality checks in GitHub Actions", "Standalone indexable page plus an iframe embed mode for member websites"],
      results: ["Every requirement of the terms of reference covered, plus CSV export and shareable links", "About 300 KB of data, usable on mobile", "Updates possible without technical skills"]
    }
  },
  {
    id: "hopitaux", categories: ["analysis", "auto"], pro: false,
    image: "assets/img/projets/hopitaux/1.jpg",
    screenshots: ["assets/img/projets/hopitaux/1.jpg", "assets/img/projets/hopitaux/2.jpg"],
    github: "https://github.com/mawa399/accessibilite-hopitaux-herault", demo: "",
    stack: ["ArcGIS Pro", "ArcPy", "OSRM", "FINESS", "ADMIN EXPRESS"],
    fr: {
      kicker: "Projet · Analyse spatiale / ArcPy",
      title: "Accessibilité des communes de l'Hérault aux hôpitaux",
      summary: "Temps de trajet en voiture vers l'hôpital le plus rapide pour les 341 communes de l'Hérault, selon trois niveaux de soins et pondéré par la population.",
      context: "Mesurer l'accès réel aux soins par la route plutôt qu'à vol d'oiseau, sans s'arrêter aux limites du département.",
      steps: ["Départ depuis la mairie de chaque commune plutôt que depuis le centroïde", "50 établissements FINESS de l'Hérault et des départements voisins, classés en CHU, MCO et proximité", "Matrice de temps de trajet OSRM (341 communes × 50 établissements)", "Comparaison avec le vol d'oiseau et indice de détour", "Chaîne entièrement scriptée en ArcPy, cartes A3"],
      results: ["98,2 % des habitants à moins de 30 min d'un hôpital MCO", "Pour 34 communes, l'hôpital le plus rapide est hors du département", "78 communes mal classées par le vol d'oiseau"]
    },
    en: {
      kicker: "Project · Spatial analysis / ArcPy",
      title: "Hospital access for the municipalities of Hérault",
      summary: "Driving time to the fastest hospital for all 341 municipalities of Hérault, across three levels of care and weighted by population.",
      context: "Measure real access to care by road rather than as the crow flies, without stopping at the department boundary.",
      steps: ["Start from each town hall rather than from the centroid", "50 FINESS facilities in Hérault and neighbouring departments, grouped into three levels", "OSRM travel-time matrix (341 municipalities × 50 facilities)", "Comparison with straight-line distance and a detour index", "Fully scripted ArcPy workflow with A3 maps"],
      results: ["98.2% of residents within 30 min of an acute-care hospital", "For 34 municipalities, the fastest hospital is outside the department", "78 municipalities misclassified by straight-line distance"]
    }
  },
  {
    id: "automatisation", categories: ["auto"], pro: true,
    image: "", cover: "flow", screenshots: [], github: "prive", demo: "",
    stack: ["Python", "PyQt", "Make", "Planificateur de tâches", "ArcGIS Enterprise", "SQL"],
    fr: {
      kicker: "Veolia · Automatisation",
      title: "Automatisation des processus SIG",
      summary: "Outils et workflows qui ont remplacé des tâches manuelles récurrentes : fusion de fichiers, circuits de validation, exports et sauvegardes planifiés.",
      context: "Beaucoup de tâches SIG répétitives étaient faites à la main, et la licence FME n'était plus disponible.",
      steps: ["Interface PyQt de fusion de fichiers XML, en remplacement de FME", "Workflows Make de gestion des fiches litiges, avec mails de validation automatiques selon le montant et des seuils", "Scripts Python planifiés : exports mensuels pour la direction, sauvegardes des bases et des couches du portail", "Exports Excel déposés sur Drive avec envoi de mail automatique"],
      results: ["Tâches récurrentes exécutées sans intervention", "Résultats des circuits de validation consultables sur ArcGIS"]
    },
    en: {
      kicker: "Veolia · Automation",
      title: "GIS process automation",
      summary: "Tools and workflows that replaced recurring manual tasks: file merging, approval circuits, scheduled exports and backups.",
      context: "Many repetitive GIS tasks were done by hand, and the FME licence was no longer available.",
      steps: ["PyQt tool to merge XML files, replacing FME", "Make workflows for dispute forms, with approval emails sent according to amount thresholds", "Scheduled Python scripts: monthly exports for management, backups of databases and portal layers", "Excel exports dropped on Drive with automatic email notifications"],
      results: ["Recurring tasks run with no manual intervention", "Approval results viewable in ArcGIS"]
    }
  },
  {
    id: "fibre", categories: ["web"], pro: false,
    image: "assets/img/projets/fibre/1.jpg", screenshots: ["assets/img/projets/fibre/1.jpg"],
    github: "https://github.com/mawa399/fibre-THD-herault", demo: "https://mawa399.github.io/fibre-THD-herault/",
    stack: ["JavaScript", "Leaflet", "API Opendatasoft", "Géoplateforme IGN"],
    fr: {
      kicker: "Projet · Web SIG / Open data",
      title: "Fibre Hérault : éligibilité des immeubles à la fibre",
      summary: "Carte interactive qui indique, pour les quelque 435 000 immeubles de l'Hérault, s'ils sont éligibles à la fibre et quel opérateur déploie le réseau.",
      context: "Première version réalisée en 2023 au Conseil départemental de l'Hérault (PHP, PostGIS, Leaflet), refaite en site statique branché en direct sur l'open data.",
      steps: ["Statistiques calculées par l'API Hérault Data et chargement des immeubles limité à l'emprise visible", "Vue par commune, puis immeuble par immeuble au zoom, avec fiche détaillée", "Recherche d'adresse avec la Géoplateforme IGN", "Filtres par statut et par zone de déploiement, fonds IGN et Esri"],
      results: ["Site entièrement statique, sans serveur ni base de données", "Carte fluide malgré environ 435 000 immeubles"]
    },
    en: {
      kicker: "Project · Web GIS / Open data",
      title: "Fibre Hérault: building fibre eligibility",
      summary: "Interactive map showing, for Hérault's roughly 435,000 buildings, whether they can get fibre and which operator is deploying the network.",
      context: "First built in 2023 at the Hérault departmental council (PHP, PostGIS, Leaflet), then rebuilt as a static site wired to open data.",
      steps: ["Statistics computed by the Hérault Data API, buildings loaded only for the visible extent", "Municipality view, then building by building when zooming in, with a detail card", "Address search with IGN Géoplateforme", "Filters by status and deployment zone, IGN and Esri basemaps"],
      results: ["Fully static site, no server or database", "Smooth map despite about 435,000 buildings"]
    }
  },
  {
    id: "metro", categories: ["web", "auto"], pro: false,
    image: "assets/img/projets/metro/1.jpg", screenshots: ["assets/img/projets/metro/1.jpg"],
    github: "https://github.com/mawa399/mini-paris-3d-metro", demo: "",
    stack: ["deck.gl", "JavaScript", "Python", "NetworkX", "GTFS", "API PRIM"],
    fr: {
      kicker: "Projet · Web 3D / Temps réel",
      title: "Mini Paris 3D : le métro parisien en temps réel",
      summary: "Les 16 lignes du métro animées en 3D sur les tracés réels, d'après les horaires d'Île-de-France Mobilités ou en temps réel avec l'API PRIM. Inspiré de Mini Tokyo 3D.",
      context: "Adapter au métro parisien l'idée de Mini Tokyo 3D, avec mes propres données et ma propre chaîne de traitement.",
      steps: ["Tracés regroupés en graphe par ligne (NetworkX) et assemblés en itinéraires", "Lecture en flux du GTFS (13 millions de lignes d'horaires)", "Position des rames interpolée le long des tracés", "Serveur Python local qui interroge PRIM pour le temps réel", "Rendu WebGL avec deck.gl"],
      results: ["16 lignes et 321 gares", "Environ 11 600 trajets modélisés un jour de semaine"]
    },
    en: {
      kicker: "Project · 3D web / Real time",
      title: "Mini Paris 3D: the Paris metro in real time",
      summary: "All 16 metro lines animated in 3D on the real tracks, from Île-de-France Mobilités timetables or in real time with the PRIM API. Inspired by Mini Tokyo 3D.",
      context: "Bring the Mini Tokyo 3D idea to the Paris metro, with my own data and processing pipeline.",
      steps: ["Track segments grouped into one graph per line (NetworkX) and assembled into routes", "Streaming read of the GTFS feed (13 million timetable rows)", "Train positions interpolated along the tracks", "Local Python server polling PRIM for real time", "WebGL rendering with deck.gl"],
      results: ["16 lines and 321 stations", "About 11,600 trips modelled on a weekday"]
    }
  },
  {
    id: "densite", categories: ["auto", "analysis"], pro: false,
    image: "assets/img/projets/densite/1.jpg",
    screenshots: ["assets/img/projets/densite/1.jpg", "assets/img/projets/densite/2.jpg", "assets/img/projets/densite/3.jpg"],
    github: "https://github.com/mawa399/densite-communale", demo: "",
    stack: ["PyQGIS", "Python", "QGIS Processing", "API Géo"],
    fr: {
      kicker: "Projet · Plugin QGIS open source",
      title: "Densité communale : plugin QGIS",
      summary: "La carte de densité de population des communes de n'importe quelle région ou département en un clic, à partir des données officielles.",
      context: "Faire d'un script qui travaillait sur des couches locales un outil réutilisable par tous, qui va chercher lui-même des données à jour.",
      steps: ["Contours communaux et populations légales INSEE récupérés via l'API Géo", "Surface mesurée sur l'ellipsoïde", "Trois classifications : échelle nationale, Jenks ou quantiles", "Style appliqué automatiquement, centroïdes en option", "Intégré à la boîte à outils de traitements de QGIS"],
      results: ["18 régions et 101 départements, outre-mer compris", "Aucune donnée à télécharger ni à préparer"]
    },
    en: {
      kicker: "Project · Open-source QGIS plugin",
      title: "Densité communale: QGIS plugin",
      summary: "One-click population density map of the municipalities of any French region or department, from official data.",
      context: "Turn a script that worked on local layers into a reusable tool that fetches up-to-date data on its own.",
      steps: ["Municipal boundaries and INSEE populations fetched through the API Géo", "Area measured on the ellipsoid", "Three classifications: national scale, Jenks or quantiles", "Automatic styling, optional centroids", "Integrated into the QGIS Processing toolbox"],
      results: ["18 regions and 101 departments, overseas included", "No data to download or prepare"]
    }
  },
  {
    id: "velib", categories: ["auto", "analysis"], pro: false,
    image: "", cover: "contours", screenshots: [], github: "https://github.com/mawa399/velib-live-airflow-postgis-powerbi", demo: "",
    stack: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "Power BI", "ArcGIS Pro"],
    fr: {
      kicker: "Projet · Data engineering",
      title: "Vélib' Live : Paris et Seine-Saint-Denis",
      summary: "Collecte automatique des disponibilités Vélib' en temps réel et analyse de l'accès au service entre Paris et la Seine-Saint-Denis, avec un rendu Power BI.",
      context: "Comparer l'offre Vélib' à Paris et en Seine-Saint-Denis en combinant analyse SIG, data engineering et tableau de bord.",
      steps: ["Pipeline de collecte temps réel orchestré par Airflow dans Docker", "Stockage dans PostgreSQL, configuration Airflow séparée du code ETL", "Analyse spatiale de l'accès aux stations dans ArcGIS Pro", "Tableau de bord Power BI"],
      results: ["Évolutions prévues : data lake MinIO et prévision de disponibilité des vélos"]
    },
    en: {
      kicker: "Project · Data engineering",
      title: "Vélib' Live: Paris and Seine-Saint-Denis",
      summary: "Automated real-time collection of Vélib' availability and analysis of access to the service between Paris and Seine-Saint-Denis, with a Power BI report.",
      context: "Compare the Vélib' offer in Paris and Seine-Saint-Denis by combining GIS analysis, data engineering and a dashboard.",
      steps: ["Real-time collection pipeline orchestrated by Airflow in Docker", "Storage in PostgreSQL, Airflow config kept apart from ETL code", "Spatial analysis of station access in ArcGIS Pro", "Power BI dashboard"],
      results: ["Next steps: a MinIO data lake and bike availability forecasting"]
    }
  }
];

/* ---------- Compétences (logos dans assets/img/logos ; sans logo = initiales) ---------- */
const SKILLS = [
  { icon: "i-map", fr: "SIG & cartographie", en: "GIS & mapping", tools: [
    { name: "ArcGIS Pro", logo: "arcgis" }, { name: "ArcGIS Enterprise", logo: "arcgis" }, { name: "ArcGIS Online", logo: "arcgis" },
    { name: "QGIS", logo: "qgis" }, { name: "Field Maps", logo: "arcgis" }, { name: "Survey123", logo: "arcgis" },
    { name: "GeoServer", abbr: "GS" }, { name: "Géoconcept", abbr: "GC" } ] },
  { icon: "i-code", fr: "Langages & développement", en: "Languages & development", tools: [
    { name: "Python", logo: "python" }, { name: "SQL", abbr: "SQL" }, { name: "JavaScript", logo: "javascript" },
    { name: "HTML / CSS", logo: "html5" }, { name: "PHP", logo: "php" }, { name: "R", logo: "r" }, { name: "PyQt", logo: "qt" }, { name: "Django", logo: "django" } ] },
  { icon: "i-layers", fr: "Bibliothèques SIG", en: "GIS libraries", tools: [
    { name: "ArcPy", logo: "arcgis" }, { name: "PyQGIS", logo: "qgis" }, { name: "GeoPandas", logo: "geopandas" }, { name: "Shapely", abbr: "Sh" },
    { name: "GDAL / OGR", logo: "gdal" }, { name: "sf · tmap (R)", logo: "r" }, { name: "Leaflet", logo: "leaflet" }, { name: "OpenLayers", logo: "openlayers" },
    { name: "deck.gl", abbr: "deck" }, { name: "ArcGIS Maps SDK for JS", logo: "arcgis" } ] },
  { icon: "i-database", fr: "Bases de données", en: "Databases", tools: [
    { name: "PostgreSQL", logo: "postgresql" }, { name: "PostGIS (extension)", abbr: "PG" }, { name: "pgRouting (extension)", abbr: "pR" }, { name: "MySQL", logo: "mysql" }, { name: "MongoDB", logo: "mongodb" } ] },
  { icon: "i-workflow", fr: "ETL & automatisation", en: "ETL & automation", tools: [
    { name: "FME", abbr: "FME" }, { name: "Make", logo: "make" }, { name: "Apache Airflow", logo: "airflow" }, { name: "Pentaho", abbr: "PDI" }, { name: "Docker", logo: "docker" }, { name: "Git", logo: "git" } ] },
  { icon: "i-chart", fr: "Dataviz & tableaux de bord", en: "Dataviz & dashboards", tools: [
    { name: "Power BI", abbr: "BI" }, { name: "ArcGIS Dashboards", logo: "arcgis" }, { name: "Experience Builder", logo: "arcgis" }, { name: "Tableau", logo: "tableau" }, { name: "Streamlit", logo: "streamlit" } ] }
];

/* ---------- Expériences (intitulés exacts du CV) ---------- */
const EXPERIENCES = [
  {
    org: "Veolia Assainissement & Maintenance France", place: "Gonesse (95)", project: "predire",
    stack: ["Python", "SQL", "ArcGIS Pro", "ArcGIS Enterprise", "Experience Builder", "Field Maps", "Survey123", "QGIS", "PyQt", "Make"],
    fr: { role: "Chargé de projet géomatique", dates: "Août 2025 – févr. 2026 · 7 mois",
      context: "Service SIG de l'activité assainissement : données des réseaux, applications web et automatisation des traitements.",
      missions: ["Scripts d'automatisation Python/SQL pour l'intégration, le contrôle qualité et la mise à jour des données géographiques", "Gestion et structuration de bases de données géographiques", "Développement et maintenance d'applications web cartographiques (ArcGIS Enterprise, Experience Builder, Web AppBuilder)", "Pipelines de traitement automatisés : planification, logs, supervision, gestion des erreurs", "Cartes, analyses et tableaux de bord SIG, support utilisateurs et documentation technique"],
      impact: "Des outils métier utilisés au quotidien par les équipes et déployés dans d'autres agences. La préparation d'une mission drone est passée de 1 h 30 à moins de 30 min, et la base des réseaux est tenue à jour sans ressaisie manuelle." },
    en: { role: "GIS Project Officer", dates: "Aug 2025 – Feb 2026 · 7 months",
      context: "GIS team of the sewer business: network data, web applications and process automation.",
      missions: ["Python/SQL automation scripts for loading, quality-checking and updating geographic data", "Management and structuring of geographic databases", "Development and maintenance of web mapping applications (ArcGIS Enterprise, Experience Builder, Web AppBuilder)", "Automated processing pipelines: scheduling, logging, monitoring, error handling", "GIS maps, analyses and dashboards, user support and technical documentation"],
      impact: "Business tools used daily by the teams and rolled out to other branches. Drone mission preparation went from 1 h 30 to under 30 min, and the network database stays up to date without manual re-entry." }
  },
  {
    org: "Veolia Assainissement & Maintenance France", place: "Gonesse (95)", project: "hydrozoom",
    stack: ["Python", "ArcGIS Pro", "ArcGIS Enterprise", "ArcOpole", "Experience Builder", "Field Maps", "Survey123", "QGIS", "PyQt", "Make"],
    fr: { role: "Apprenti Géomaticien", dates: "Oct. 2023 – août 2025 · 23 mois",
      context: "Alternance du Master G2M au sein du service SIG assainissement.",
      missions: ["Traitement et alimentation des bases Assainissement SIG (ArcGIS Enterprise)", "Conception, analyse et mise à jour d'applications web cartographiques (ArcGIS, ArcOpole)", "Automatisation des processus SIG et interfaces dynamiques", "Aide et support aux utilisateurs SIG"],
      impact: "Mise en place d'applications métier et premières versions de l'outil PREDIRE." },
    en: { role: "Apprentice Geomatics Technician", dates: "Oct 2023 – Aug 2025 · 23 months",
      context: "Work-study placement during the G2M Master's, in the sewer GIS team.",
      missions: ["Processing and loading of the sewer GIS databases (ArcGIS Enterprise)", "Design, analysis and updating of web mapping applications (ArcGIS, ArcOpole)", "Automation of GIS processes and interactive tools", "GIS user help and support"],
      impact: "Business applications put into service and first versions of the PREDIRE tool." }
  },
  {
    org: "Conseil départemental de l'Hérault", place: "Montpellier (34)", project: "fibre",
    stack: ["PostgreSQL", "PostGIS", "FME", "ArcGIS Server", "GraceTHD"],
    fr: { role: "Apprenti Géomaticien", dates: "Nov. 2022 – sept. 2023 · 11 mois",
      context: "Alternance de la licence professionnelle SIG Web au sein du service SIG du Département.",
      missions: ["Gestion et structuration des données géographiques dans une base SIG centralisée PostgreSQL/PostGIS", "Workflows FME de contrôle qualité et d'intégration des livrables des prestataires", "Cartes thématiques et analyses spatiales pour les services métiers (urbanisme, social, routes)", "Services web cartographiques sous ArcGIS Server"],
      impact: "Géoservice de suivi du déploiement de la fibre THD (modèle GraceTHD), alimenté en continu par la base PostGIS." },
    en: { role: "Apprentice Geomatics Technician", dates: "Nov 2022 – Sep 2023 · 11 months",
      context: "Work-study placement during the Web GIS professional bachelor's, in the department's GIS team.",
      missions: ["Management and structuring of geographic data in a centralised PostgreSQL/PostGIS database", "FME workflows for quality control and loading of contractor deliverables", "Thematic maps and spatial analyses for business departments (planning, social, roads)", "Web map services on ArcGIS Server"],
      impact: "Web service tracking the fibre roll-out (GraceTHD model), continuously fed by the PostGIS database." }
  }
];
