const internService = require("../services/intern.service");

const internController = {

    addIntern : async(req, res) => {
    
        try{
            await internService.addIntern(req.body);
            res.sendStatus(201);
        }
        catch(error){
            res.status(500).json({error: error.message});
        };
    }
};

module.exports = internController;