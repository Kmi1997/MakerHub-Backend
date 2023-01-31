const express = require("express");
const adminController = require("../controllers/admin.controller");
const TokenCheckerMiddleware = require("../middlewares/tokenChecker");
const adminRouter = express.Router();


adminRouter.post("/addAdmin", TokenCheckerMiddleware(), adminController.addAdmin);
adminRouter.post("/testConnection", adminController.testConnection);
adminRouter.get("/getThisAdmin", TokenCheckerMiddleware(), adminController.getThisAdmin);

module.exports = adminRouter;