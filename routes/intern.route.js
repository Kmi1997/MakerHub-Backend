const express = require("express");
const internController = require("../controllers/intern.controller");
const internRouter = express.Router();
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');
const internSchema = require('../validators/intern');

internRouter.post("/addIntern", bodyMiddleware(internSchema), internController.addIntern);

module.exports = internRouter;