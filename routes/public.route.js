const express = require("express");
const publicController = require("../controllers/public.controller");
const publicRouter = express.Router();

publicRouter.get('/home', publicController.home);
publicRouter.get('/menu', publicController.menu);
publicRouter.get('/sendUrl', publicController.sendUrl);
publicRouter.get('/getInternships', publicController.sendInternships);

module.exports = publicRouter;