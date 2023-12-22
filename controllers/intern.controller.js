const mail = require('../services/mail.service');
const internService = require("../services/intern.service");
const internshipService = require("../services/internship.service");

const internController = {

    addIntern: async (req, res) => {
        try {
            req.body.paid = false;
            await internService.addIntern(req.body);
            const internshipId = req.body.internshipId;
            const internship = await internshipService.getOne(internshipId);
            await internService.descrease(internshipId);
            res.status(201).render('finishedOperationPublic', { response: "Inscription validée. Un mail reprenant les informations du stage vous sera envoyé." });
            await mail(req.body.mail, internship.name.toLowerCase(), req.body.childName, internship.price);
        }
        catch(error) {res.status(500).render('error')}
    },

    getAll: async (req, res) => {

        const interns = await internService.getAll();
        if (!interns) {
            return res.status(400).render('test', { message: "Les utilisateurs sont introuvables." });
        }
        else {
            res.status(200).render('test', {interns});
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
            const results = await internService.destroy(params);
            res.status(201).json({ message: "Utilisateur supprimé", results});
        }
        catch (err) {
            res.status(404).json({ message: "Utilisateur introuvable" });
        }
    }
};

module.exports = internController;