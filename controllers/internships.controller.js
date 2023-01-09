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
    }
};

module.exports = internshipController;