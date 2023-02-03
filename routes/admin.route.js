const express = require("express");
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();


adminRouter.post("/addAdmin", adminController.addAdmin);
adminRouter.post("/testConnection", adminController.testConnection);
adminRouter.get("/getThisAdmin", adminController.getThisAdmin);

module.exports = adminRouter;