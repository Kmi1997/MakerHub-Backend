const express = require("express");
const internController = require("../controllers/intern.controller");
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');
const internSchema = require('../validators/intern');

const internRouter = express.Router();

internRouter.post("/addIntern", bodyMiddleware(internSchema), internController.addIntern);
internRouter.get("/getAll", internController.getAll);


module.exports = internRouter;