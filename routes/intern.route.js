const express = require("express");
const internController = require("../controllers/intern.controller");
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');
const internSchema = require('../validators/intern.validator');
const TokenCheckerMiddleware = require('../middlewares/tokenChecker.middleware');
const internRouter = express.Router();

internRouter.post("/addIntern", bodyMiddleware(internSchema), internController.addIntern);
internRouter.get("/getAll", TokenCheckerMiddleware(), internController.getAll);
internRouter.patch("/update/:id", TokenCheckerMiddleware(), bodyMiddleware(internSchema), internController.updating);
internRouter.delete("/delete/:id", TokenCheckerMiddleware(), internController.destroy);

module.exports = internRouter;