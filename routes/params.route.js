const express = require("express");
const paramsController = require("../controllers/params.controller");
const paramsRouter = express.Router();



paramsRouter.post("/addParams", paramsController.addParams);



module.exports = paramsRouter;