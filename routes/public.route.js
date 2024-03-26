const express = require("express");
const publicController = require("../controllers/public.controller");
const publicRouter = express.Router();

publicRouter.get('/stages', publicController.internships);
publicRouter.get('/galerie', publicController.gallery);
publicRouter.get('/contact', publicController.contact);
publicRouter.get('/signIn', publicController.signIn)
module.exports = publicRouter;