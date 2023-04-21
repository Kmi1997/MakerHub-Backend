const express = require("express");
const internshipController = require("../controllers/internships.controller");
const internshipSchema = require('../validators/internship.validator');
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');

const TokenCheckerMiddleware = require('../middlewares/tokenChecker.middleware');

const internshipRouter = express.Router();

internshipRouter.post("/addInternship", TokenCheckerMiddleware(), bodyMiddleware(internshipSchema), internshipController.addInternship);
internshipRouter.get("/getAll", internshipController.getInternship);

internshipRouter.get("/getOne/:id", internshipController.getOne);
internshipRouter.patch("/updating/:id", TokenCheckerMiddleware(), bodyMiddleware(internshipSchema), internshipController.updating);
internshipRouter.delete("/delete/:id", TokenCheckerMiddleware(), internshipController.destroy);

module.exports = internshipRouter;