import { Router } from 'express';
import getThreeCoffeeController from './controllers/getThreeCoffeeController.js';
import getAllCoffeeController from './controllers/getAllCoffeeController.js';
import getOneCoffeeController from './controllers/getOneCoffeeController.js';

const router = Router();

router.get('/', getThreeCoffeeController.homePage);

router.get('/catalogue', getAllCoffeeController.cataloguePage);
 
router.get('/produit/:id', getOneCoffeeController.getCoffeeById);

router.get('/contact', (req, res) => {
    res.render('contact.ejs');
});


// route juste pour test le rendu de la page 404 sans simuler d'erreur
router.get('/404', (req, res) => {
    res.render('404.ejs');
});

// route juste pour test le rendu de la page 500 sans simuler d'erreur
router.get('/500', (req, res) => {
    res.render('500.ejs');
});



export default router;