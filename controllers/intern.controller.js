const mail = require('../services/mail.service');
const internService = require("../services/intern.service");
const internshipService = require("../services/internship");

const internController = {

    addIntern: async (req, res) => {

        const intern = await internService.addIntern(req.body);
        const internshipId = req.body.internshipId;
        const internship = await internshipService.getOne(internshipId);

        if (!intern) {
            return res.status(400).json({ message: "Erreur lors de l'envoi du formulaire" });
        };

        if (internship.numberAvailable <= 0) {
            return res.status(200).json({ message: "Les inscriptions ne sont plus possibles" });
        }

        await internService.descrease(internshipId);

        //to send the mail with the personalized data
        mail(req.body.mail, internship.name.toLowerCase(), req.body.childName, internship.price);

        res.location('intern/' + intern.id);
        res.status(201).json({ message: "Inscription validée!" });
    }
};

module.exports = internController;