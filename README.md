# Projet de débat en ligne

## Description

Le projet de débat en ligne permet aux utilisateurs de participer à des débats en ligne avec un temps de parole limité pour chaque participant. Le projet est basé sur une application web développée avec ReactJS et ExpressJS. Il est également utilisé une base de données MongoDB pour stocker les informations des utilisateurs.

## Fonctionnalités

- Inscription et connexion des utilisateurs
- Organisation de débats en ligne entre deux utilisateurs
- Limite de temps de parole pour chaque participant
- Enregistrement des débats passés pour les visualiser plus tard
- Fonctionnalité de recherche pour les débats passés

## Technologies utilisées

- ReactJS
- ExpressJS
- MongoDB

## Installation

1. Clonez le repository en utilisant la commande suivante :

```
git clone https://github.com/aboalsim114/Discussify.git

```

2. Allez dans le dossier et installez les dépendances en utilisant la commande suivante :

```cd Discussify
npm install
```

3. Allez dans le dossier Backend et installez les dépendances en utilisant la commande suivante :

```cd ../Backend
npm install
```

4. Configurez les variables d'environnement en créant un fichier .env dans le dossier server en vous basant sur le fichier .env.example. Ajoutez-y les informations de connexion à votre base de données MongoDB.

5. Lancez l'application en utilisant la commande suivante dans le dossier server :

```
npm start
```
