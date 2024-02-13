const express = require("express");
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();
const TokenCheckerMiddleware = require('../middlewares/tokenChecker.middleware');

adminRouter.get('/internships', TokenCheckerMiddleware(), adminController.viewInternships);
adminRouter.get('/internships/editInternship',TokenCheckerMiddleware(), adminController.editInternship);
adminRouter.get("/internships/addnewinternship", TokenCheckerMiddleware(), adminController.addNewInternship);
adminRouter.post("/testConnection", adminController.testConnection);
adminRouter.get("/connection", adminController.connection);
adminRouter.get("/getThisAdmin", TokenCheckerMiddleware(), adminController.getThisAdmin);
adminRouter.get("/interns", TokenCheckerMiddleware(), adminController.viewInterns);
adminRouter.post("/addAdminJson", adminController.addAdminJson);
module.exports = adminRouter;