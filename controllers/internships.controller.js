const internshipService = require("../services/internship");

const internshipController = {

    addInternship : async(req, res) => {
    
        try{
            await internshipService.addInternship(req.body);
            res.sendStatus(201);
        }
        catch(error){
            res.status(500).json({error: error.message});
        };
    },

    getInternship : async(req, res) => {

        try{
            const resultsInternship = await internshipService.getInternship();
            res.status(201).json(resultsInternship);
        }
        catch(error){
            res.status(500).json({error: error.message});
        };
    },

    getOne : async(req, res) => {
        
        const params = req.params.id;

        try{
            const resultsInternship = await internshipService.getOne(params);
            res.status(201).json(resultsInternship);
        }
        catch(error){
            res.status(500).json({error: error.message});
        };
    }
};

module.exports = internshipController;