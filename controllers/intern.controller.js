const mail = require('../services/mail.service');
const internService = require("../services/intern.service");
const internshipService = require("../services/internship");

const internController = {

    addIntern : async(req, res) => {
    
        
        const intern =    await internService.addIntern(req.body);
        
        if(!intern) {
            return res.status(400).json({message: "Erreur lors de l'envoi du formulaire"});
        };

        //get child's id of internInternship table
        const tempId = await internService.getHisInternship(req.body.internshipId);

        //get internship's id of internInternship table
        const hisInternship = await internshipService.getOne(tempId.InternshipId);

        //to send the mail with the personalized data
        mail(req.body.mail, hisInternship.name.toLowerCase(), req.body.childName, hisInternship.price)
       

        res.location('intern/' + intern.id);
        res.status(201).json({message: "Inscription validée!"});
    }
};

module.exports = internController;