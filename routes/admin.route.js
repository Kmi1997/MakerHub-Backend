const express = require("express");
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();

adminRouter.post("/addAdmin", adminController.addAdmin);

module.exports = adminRouter;