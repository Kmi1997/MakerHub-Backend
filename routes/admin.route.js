const express = require("express");
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');
const adminSchema = require('../validators/admin.validator');
const TokenCheckerMiddleware = require('../middlewares/tokenChecker.middleware');

adminRouter.post("/addAdmin", TokenCheckerMiddleware(), bodyMiddleware(adminSchema), adminController.addAdmin);
adminRouter.get('/home', TokenCheckerMiddleware(), adminController.home);
adminRouter.get('/homeJson', adminController.homeJson);
adminRouter.get('/internships', adminController.viewInternships);
adminRouter.get('/internships/editInternship', adminController.editInternship);
adminRouter.get("/internships/addnewinternship", adminController.addNewInternship);
adminRouter.post("/testConnection", adminController.testConnection);
adminRouter.get("/connection", adminController.connection);
adminRouter.get("/getThisAdmin", TokenCheckerMiddleware(), adminController.getThisAdmin);
adminRouter.get("/getAll", TokenCheckerMiddleware, adminController.getAll);
adminRouter.patch("/update/:id", TokenCheckerMiddleware(), adminController.update);
adminRouter.delete("/delete/:id", TokenCheckerMiddleware(), adminController.destroy);



module.exports = adminRouter;