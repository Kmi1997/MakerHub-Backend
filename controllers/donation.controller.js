const donationService = require("../services/donation.service");

const donationController = {

    addDonation : async(req, res) => {
    
        try{
            await donationService.donationFn(req.body);
            res.sendStatus(201);
        }
        catch(error){
            res.status(500).json({error: error.message});
        };
    },

    getDonation : async (req, res) => {
        try{
            const results = await donationService.getDonation();
            res.json(results);
        }
        catch(error){
            res.status(500).json({error: error.message});
        };
    }
};

module.exports = donationController;