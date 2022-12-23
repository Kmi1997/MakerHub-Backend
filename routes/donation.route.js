const express = require("express");
const donationController = require("../controllers/donation.controller");
const donationRouter = express.Router();

donationRouter.post("/addDonation", donationController.addDonation);
donationRouter.get("/getDonation", donationController.getDonation);

module.exports = donationRouter;