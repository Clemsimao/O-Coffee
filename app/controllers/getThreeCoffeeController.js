import dataMapper from "../dataMapper.js";

// désolé j'ai pas trouver mieux en nom mdr, controller qui récupère la requete sql depuis le dataMapper et renvoie à la vue l'affichage des 3 cafés aléatoire

const getThreeCoffeeController = {
    async homePage(req, res, next) {
        try {
            const threeProducts = await dataMapper.getThreeCoffee();
            res.render('accueil', { threeProducts });
        } catch (error) {
            next(error);
        }
    }
};

export default getThreeCoffeeController;