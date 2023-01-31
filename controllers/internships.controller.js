const internshipService = require("../services/internship");

const internshipController = {

    addInternship: async (req, res) => {

        try {

            await internshipService.addInternship(req.body);
            res.status(201).json({ message: "Création du stage réussie" });
        }
        catch (error) {
            res.status(500).json({ 'error': error.message });
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
        try {
            const params = req.params.id;
            await internshipService.updating(params, req.body);
            res.status(201).json({ message: "Stage mis à jour" });
        }
        catch (err) {
            res.status(422).json({ message: "Erreur de données" });
        }
    },

    destroy: async (req, res) => {
        try {
            const params = req.params.id;
            console.log(params);
            await internshipService.destroy(params);
            res.status(200).json({ message: "Stage supprimé." });
        }
        catch (err) {
            res.status(500).json({ message: "Erreur du serveur" });
        }
    }
};
module.exports = internshipController;