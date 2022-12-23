const donationService = require("../services/donation.service");

const donationController = {

    addDonation: async(req, res) => {
        console.log(req.body);
        try{
            await donationService.donationFn(req.body);
            res.sendStatus(201);
        }
        catch(error){
            res.status(500).json({error: error.message});
        };
    }
};

module.exports = donationController;