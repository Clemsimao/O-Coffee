import "dotenv/config";
import express from "express";
import router from "./app/router.js";
import errorHandler from './app/middlewares/errorHandler.js';
import notFoundHandler from './app/middlewares/notFoundHandler.js';

const app = express();

app.set("view engine", "ejs");
app.set("views", "app/views");

app.use(express.static("public"));


app.use(router);

// Middleware de gestion des erreurs 404
app.use(notFoundHandler);

// Middleware pour gérer les erreurs 500
app.use(errorHandler);

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;
app.listen(PORT, () => {
  console.log(`Server started on ${BASE_URL}:${PORT}`);
});
