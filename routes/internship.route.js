const express = require("express");
const internshipController = require("../controllers/internships.controller");
const internshipRouter = express.Router();

internshipRouter.post("/addInternship", internshipController.addInternship);
internshipRouter.get("/getInternship", internshipController.getInternship);


module.exports = internshipRouter;