import dataMapper from "../dataMapper.js";

// controller pour récupérer tout les cafés de la bdd sur la page catalogue avec méthode asynchrone et next(error) qui renvoi au middleware notFound

const getAllCoffeeController = {
    async cataloguePage(req, res) {
        try {
            const allProducts = await dataMapper.getAllCoffee();
            res.render('catalogue', { allProducts });
        } catch (error) { // renvoi vers le middleware errorHandler les erreurs 500
            next(error);
        }
    }
};

export default getAllCoffeeController;