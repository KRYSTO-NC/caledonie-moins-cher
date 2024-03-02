# Krysto Shop

E-commerce application Krysto, built with the MERN stack.

## Structure du Projet

- **backend:** Dossier contenant le code source du backend.
- **frontend:** Dossier contenant le code source du frontend.
- **uploads:** Dossier destiné à stocker les fichiers téléchargés.
- **.env:** Fichier pour les variables d'environnement.
- **package.json:** Fichier de configuration du projet.

## Technologies Utilisées

### Backend

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)


### Frontend

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)

## Configuration

1. Installez les dépendances du backend en exécutant `npm install` dans le dossier backend.
2. Installez les dépendances du frontend en exécutant `npm install` dans le dossier frontend.
3. Configurez les variables d'environnement en créant un fichier `.env` à la racine du projet.

## Scripts

### Backend

- `npm start`: Lance le serveur backend.
- `npm run server`: Lance le serveur backend avec nodemon.
- `npm run dev`: Lance simultanément le serveur backend et le frontend en mode développement.
- `npm run data:import`: Importe des données avec le seeder.
- `npm run data:destroy`: Détruit les données avec le seeder en mode de destruction.

**Note:** Avant le déploiement, exécutez le seeder avec la commande suivante pour inclure le premier utilisateur en tant qu'administrateur :
```bash
npm run data:import -i
