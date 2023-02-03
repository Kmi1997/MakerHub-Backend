const express = require("express");
const internshipController = require("../controllers/internships.controller");
const internshipSchema = require('../validators/internship.validator');
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');


const internshipRouter = express.Router();

internshipRouter.post("/addInternship", bodyMiddleware(internshipSchema), internshipController.addInternship);
internshipRouter.get("/getInternship", internshipController.getInternship);
internshipRouter.get("/getOne/:id", internshipController.getOne);
internshipRouter.patch("/updating/:id", bodyMiddleware(internshipSchema), internshipController.updating);
internshipRouter.delete("/delete/:id", internshipController.destroy);

module.exports = internshipRouter;