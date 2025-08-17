# Utilise une image officielle Node.js comme image de base
FROM node:20

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du projet dans le conteneur
COPY . .

# Exposer le port utilisé par l'application (défini dans .env)
EXPOSE 8000

# Démarrer l'application
CMD ["node", "index.js"]
