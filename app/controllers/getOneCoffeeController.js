import dataMapper from "../dataMapper.js";

// controller pour récupérer un café de la bdd sur la page produit avec méthode asynchrone et le req.params et next(error) qui renvoi au middleware notFound

const getOneCoffeeController = {
    async getCoffeeById(req, res, next) {
        try {
            const coffeeId = parseInt(req.params.id, 10);
            const coffee = await dataMapper.getOneCoffee(coffeeId);
            if (coffee) {
                res.render('produit', { coffee });
            } else {
                res.status(404).render('404'); //rend la page 404 si par exemple http://localhost:8000/produit/%22!%C3
            }
        } catch (error) {
            next(error); // renvoi vers le middleware errorHandler les erreurs 500
        }
    }
};

export default getOneCoffeeController;