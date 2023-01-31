const express = require("express");
const internshipController = require("../controllers/internships.controller");
const internshipRouter = express.Router();
const internshipSchema = require('../validators/internship.validator');
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');
const TokenCheckerMiddleware = require("../middlewares/tokenChecker");


internshipRouter.post("/addInternship", TokenCheckerMiddleware(), bodyMiddleware(internshipSchema), internshipController.addInternship);
internshipRouter.get("/getInternship", TokenCheckerMiddleware(), internshipController.getInternship);
internshipRouter.get("/getOne/:id", TokenCheckerMiddleware(), internshipController.getOne);
internshipRouter.patch("/updating/:id", TokenCheckerMiddleware(), bodyMiddleware(internshipSchema), internshipController.updating);
internshipRouter.delete("/delete/:id", TokenCheckerMiddleware(), internshipController.destroy);

module.exports = internshipRouter;