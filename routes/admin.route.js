const express = require("express");
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');
const adminSchema = require('../validators/admin.validator');
const TokenCheckerMiddleware = require('../middlewares/tokenChecker.middleware');
const checkRole = require('../middlewares/checkRole.middleware');

adminRouter.post("/addAdmin", TokenCheckerMiddleware(), checkRole(),
    bodyMiddleware(adminSchema, 'allParams'), adminController.addAdmin);

adminRouter.get('/home', TokenCheckerMiddleware(), adminController.home);
adminRouter.get('/param', TokenCheckerMiddleware(), checkRole(), adminController.allParams);
adminRouter.get('/homeJson', TokenCheckerMiddleware(), adminController.homeJson);
adminRouter.get('/internships', TokenCheckerMiddleware(), adminController.viewInternships);
adminRouter.get('/internships/editInternship',TokenCheckerMiddleware(), adminController.editInternship);
adminRouter.get("/internships/addnewinternship", TokenCheckerMiddleware(), adminController.addNewInternship);
adminRouter.post("/testConnection", adminController.testConnection);
adminRouter.get("/connection", adminController.connection);
adminRouter.get("/getThisAdmin", TokenCheckerMiddleware(), adminController.getThisAdmin);
adminRouter.patch("/update/:id", TokenCheckerMiddleware(), adminController.update);
adminRouter.delete("/delete/:id", TokenCheckerMiddleware(), adminController.destroy);

module.exports = adminRouter;