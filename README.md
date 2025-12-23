# Application Web avec Horaires de Travail

## Description

Cette application web Express.js contient trois pages principales (Accueil, Services, Contact) qui sont accessibles uniquement pendant les heures de travail (du lundi au vendredi, de 9h à 17h).

En dehors de ces horaires, les visiteurs sont redirigés vers une page indiquant que le site est fermé.

## Fonctionnalités

- Page d'accueil avec présentation de l'entreprise
- Page des services proposés
- Page de contact avec informations pratiques
- Middleware personnalisé pour vérifier les horaires d'ouverture
- Page de fermeture affichée en dehors des heures de travail
- Interface responsive avec CSS

## Technologies utilisées

- Node.js
- Express.js
- EJS (moteur de template)
- CSS

## Structure du projet

```
projet/
├── middleware/
│   └── checkWorkingHours.js
├── views/
│   ├── home.ejs
│   ├── service.ejs
│   ├── contact.ejs
│   ├── fermer.ejs
│   ├── header.ejs
│   └── footer.ejs
├── public/
│   └── style.css
├── server.js
├── package.json
└── README.md
```

## Installation

1. Cloner le repository

```bash
git clone [URL_DU_REPO]
cd [NOM_DU_DOSSIER]
```

2. Installer les dépendances

```bash
npm install
```

## Utilisation

1. Démarrer le serveur

```bash
node server.js
```

2. Ouvrir le navigateur à l'adresse

```
http://localhost:4000
```

## Horaires d'ouverture

- Lundi à Vendredi : 9h00 - 17h00
- Samedi et Dimanche : Fermé

Le site affiche automatiquement une page de fermeture en dehors de ces horaires.

## Routes disponibles

- `/` ou `/home` : Page d'accueil
- `/service` : Page des services
- `/contact` : Page de contact

## Middleware

Le middleware `checkWorkingHours` vérifie l'heure et le jour de la requête avant de permettre l'accès aux pages. Il se trouve dans le dossier `middleware/`.

## Auteur

Bacar IMANE
