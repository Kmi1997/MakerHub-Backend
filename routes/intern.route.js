const express = require("express");
const internController = require("../controllers/intern.controller");
const internRouter = express.Router();

internRouter.post("/addIntern", internController.addIntern);

module.exports = internRouter;