const express = require("express");
const internshipController = require("../controllers/internships.controller");
const internshipRouter = express.Router();

internshipRouter.post("/addInternship", internshipController.addInternship);

module.exports = internshipRouter;