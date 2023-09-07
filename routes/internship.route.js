const express = require("express");
const internshipController = require("../controllers/internships.controller");
const internshipSchema = require('../validators/internship.validator');
const bodyMiddleware = require('../middlewares/bodyValidator.middleware');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const TokenCheckerMiddleware = require('../middlewares/tokenChecker.middleware');

const internshipRouter = express.Router();

internshipRouter.post("/addInternship", upload.single('image_file'),  bodyMiddleware(internshipSchema),  internshipController.addInternship);
internshipRouter.get("/getAll", TokenCheckerMiddleware(), internshipController.getInternship);
internshipRouter.get("/getOne", internshipController.getOne);
internshipRouter.post("/updating", upload.single('image_file'), bodyMiddleware(internshipSchema), internshipController.updating);
internshipRouter.delete("/delete/:id", TokenCheckerMiddleware(), internshipController.destroy);

module.exports = internshipRouter;