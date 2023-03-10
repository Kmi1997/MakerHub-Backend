const mail = require('../services/mail.service');
const internService = require("../services/intern.service");
const internshipService = require("../services/internship");

const internController = {

    addIntern: async (req, res) => {

        const intern = await internService.addIntern(req.body);
        const internshipId = req.body.internshipId;
        const internship = await internshipService.getOne(internshipId);

        if (!intern) {
            return res.status(400).json({ message: "Le stage n'est pas trouvé." });
        };

        if (internship.numberAvailable <= 0) {
            return res.status(200).json({ message: "Les inscriptions ne sont plus possibles" });
        }

        await internService.descrease(internshipId);

        //to send the mail with the personalized data
        mail(req.body.mail, internship.name.toLowerCase(), req.body.childName, internship.price);

        res.location('intern/' + intern.id);
        res.status(201).json({ message: "Inscription validée!" });
    },

    getAll: async (req, res) => {

        const interns = await internService.getAll();

        if (!interns) {
            return res.status(400).json({ message: "Les utilisateurs sont introuvables." });
        }
        else {
            res.status(200).json(interns);
        };
    },

    updating: async (req, res) => {
        try {
            const params = req.params.id;
            await internService.updating(params, req.body);
            res.status(201).json({ message: "Inscription mise à jour" });
        }
        catch (err) {
            res.status(422).json({ message: "Erreur de données" });
        }
    },

    destroy: async (req, res) => {
        try {
            const params = req.params.id;
            await internService.destroy(params);
            // await internService.increment(params);
            res.status(201).json({ message: "Utilisateur supprimé" });
        }
        catch (err) {
            res.status(404).json({ message: "Utilisateur introuvable" });
        }
    }
};

module.exports = internController;