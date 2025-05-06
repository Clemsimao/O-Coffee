import database from "./database.js";

const dataMapper = {
    // requete préparée pour l'onglet nouveautés de la page d'accueil, de base je voulais afficher les 3 premiers de la liste mais pour plus de dynamisation  j'ai préferer afficher 3 café en aléatoire
    async getThreeCoffee() {
        const query = "SELECT * FROM coffee ORDER BY RANDOM() LIMIT $1";
        const values = [3];
        const result = await database.query(query, values);
        return result.rows;
    },

    // requete pour afficher tout les cafés sur la page catalogue
    async getAllCoffee() {
        const query = "SELECT * FROM coffee";
        const result = await database.query(query);
        return result.rows;
    },

    // requete préparée pour afficher 1 café, ça sert sur la page catalogue quand on clique sur "Découvrir le café"
    async getOneCoffee(id) {
        const query = "SELECT * FROM coffee WHERE id = $1";
        const values = [id];
        const result = await database.query(query, values);
        return result.rows[0];
    }
};

export default dataMapper;