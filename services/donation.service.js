const Donation = require("../models/Donation");
const db = require('../configDb');

async function donationFn(data){

    await db.Donation.create(data);  

};

module.exports = {
    donationFn
};