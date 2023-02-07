const express = require("express");
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');
const adminSchema = require('../validators/admin.validator');



adminRouter.post("/addAdmin", bodyMiddleware(adminSchema), adminController.addAdmin);
adminRouter.post("/testConnection", adminController.testConnection);
adminRouter.get("/getThisAdmin", adminController.getThisAdmin);
adminRouter.get("/getAll", adminController.getAll);
adminRouter.patch("/update/:id", adminController.update);
adminRouter.delete("/delete/:id", adminController.destroy);



module.exports = adminRouter;