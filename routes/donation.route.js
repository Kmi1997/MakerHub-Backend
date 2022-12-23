const express = require("express");
const donationController = require("../controllers/donation.controller");
const donationRouter = express.Router();

donationRouter.post("/addUser", donationController.addDonation);

module.exports = donationRouter;