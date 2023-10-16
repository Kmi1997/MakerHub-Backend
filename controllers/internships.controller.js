const internshipService = require("../services/internship.service");
const { ValidationError } = require("sequelize");

const internshipController = {

    addInternship: async (req, res) => {

        try {
            if (req.file){
                req.body.image = req.file.buffer;
            };
            await internshipService.addInternship(req.body);
            res.status(201).json({ message: "Création du stage réussie" });
        }
        catch (error) {
            if (error instanceof ValidationError) return res.status(400).render({ message: error.message, data: error });
            res.status(500).json({ error: error.message });
        };
    },

    getInternship: async (req, res) => {

        try {
            const resultsInternship = await internshipService.getInternship();
            res.status(201).json(resultsInternship);
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        };
    },

    getOne: async (req, res) => {

        const params = req.params.id;

        try {
            const resultsInternship = await internshipService.getOne(params);

            if (resultsInternship == null) {
                res.status(201).json({ error: "Id inexistant" });
            }
            else {
                res.status(201).json(resultsInternship);
            };
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        };
    },

    updating: async (req, res) => {

        if (req.file){
            req.body.image = req.file.buffer
        };

        if (!req.body.activated){
            req.body.activated = false;
        };

        try {
            console.log(" là " + req.query.id)
            await internshipService.updating(req.query.id, req.body);
            res.status(201).render('finishedOperation', { response: "Stage mis à jour avec succès" });
        }
        catch (err) {
            res.status(500).render('finishedOperation', { response: "Erreur interne du serveur" });
        };
    },

    destroy: async (req, res) => {
        try {
            const params = req.params.id;
            await internshipService.destroy(params);
            res.status(200).json({ message: "Stage supprimé." });
        }
        catch (err) {
            res.status(404).json({ message: "Stage inconnu." });
        }
    }
};
module.exports = internshipController;