const internshipService = require("../services/internship");

const internshipController = {

    addInternship : async(req, res) => {
    
        try{
            await internshipService.addInternship(req.body);
            res.status(201).json({message: "Création du stage réussie"});
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
            
            if(resultsInternship == null){
                res.status(201).json({error:"Id inexistant"});
            }
            else{
                res.status(201).json(resultsInternship);
            };
        }
        catch(error){
            res.status(500).json({error: error.message});
        };
    }
};

module.exports = internshipController;