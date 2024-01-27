const express = require("express");
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');
const adminSchema = require('../validators/admin.validator');
const TokenCheckerMiddleware = require('../middlewares/tokenChecker.middleware');

adminRouter.post("/addAdmin", TokenCheckerMiddleware(), bodyMiddleware(adminSchema, 'allParams'), adminController.addAdmin);
adminRouter.get('/home', TokenCheckerMiddleware(), adminController.internships);
adminRouter.get('/internships', TokenCheckerMiddleware(), adminController.viewInternships);
adminRouter.get('/internships/editInternship',TokenCheckerMiddleware(), adminController.editInternship);
adminRouter.get("/internships/addnewinternship", TokenCheckerMiddleware(), adminController.addNewInternship);
adminRouter.post("/testConnection", adminController.testConnection);
adminRouter.get("/connection", adminController.connection);
adminRouter.get("/getThisAdmin", TokenCheckerMiddleware(), adminController.getThisAdmin);
adminRouter.post("/addAdmin", TokenCheckerMiddleware(), bodyMiddleware(adminSchema,'allParams'), adminController.addAdmin);
adminRouter.get("/interns", TokenCheckerMiddleware(), adminController.viewInterns);
module.exports = adminRouter;