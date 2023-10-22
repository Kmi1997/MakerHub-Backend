const express = require("express");
const publicController = require("../controllers/public.controller");
const publicRouter = express.Router();

publicRouter.get('/home', publicController.home);

module.exports = publicRouter;