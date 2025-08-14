// Chargement des variables d'environnement depuis le fichier .env
import "dotenv/config";
// Importation du framework Express
import express from "express";
// Importation du routeur principal de l'application
import router from "./app/router.js";
// Importation du middleware de gestion des erreurs 500
import errorHandler from './app/middlewares/errorHandler.js';
// Importation du middleware de gestion des erreurs 404
import notFoundHandler from './app/middlewares/notFoundHandler.js';

// Création de l'application Express
const app = express();

// Configuration du moteur de templates EJS et du dossier des vues
app.set("view engine", "ejs");
app.set("views", "app/views");

// Mise à disposition du dossier public pour les fichiers statiques (CSS, images, JS)
app.use(express.static("public"));


// Utilisation du routeur principal pour gérer les routes de l'application
app.use(router);

// Middleware de gestion des erreurs 404 (page non trouvée)
app.use(notFoundHandler);

// Middleware de gestion des erreurs 500 (erreur serveur)
app.use(errorHandler);

// Récupération du port et de l'URL de base depuis les variables d'environnement
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

// Démarrage du serveur Express
app.listen(PORT, () => {
  console.log(`Server started on ${BASE_URL}:${PORT}`);
});
