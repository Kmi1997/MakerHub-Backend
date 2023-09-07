
const adminService = require("../services/admin.service");
const internshipService = require("../services/internship.service");

const adminController = {

    home: async (req, res) => {
        try { res.status(200).render('home'); }
        catch (error) { res.status(500).render('error'); };
    },

    homeJson: async (req, res) => {

        const dataChart = await internshipService.getInternship();

        if (dataChart) {
            res.status(200).json(dataChart); // Envoyer une réponse JSON
        }
        else {
            res.status(200).json({ error: 'Aucune données trouvées' }); // Envoyer une réponse JSON avec erreur
        };
    },

    viewInternships: async (req, res) => {

        try{
            const internships = await internshipService.getInternship();
            if (internships.length > 0){
                res.status(200).render('internships', {data : internships});
            }
            else{
                res.status(404).render('internships', {data : internships});
            };
        }
        catch(err){
            res.status(500).render('error');
        };
    },

    addNewInternship: async (req, res) => {
        try{
            res.status(200).render('addInternship');
        }
        catch(error){
            res.status(500).render('error');
        };
    },

    editInternship: async (req, res) => {
        try{
            const internship = await internshipService.getOne(req.query.id);
            console.log(internship.activated)
            res.status(200).render('editInternship', {data : internship });
        }
        catch{
            res.status(500).render('error');
        };
    },

    addAdmin: async (req, res) => {

        try {
            await adminService.addAdmin(req.body);
            res.status(201).json({ message: "Administrateur créé" });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        };
    },

    testConnection: async (req, res) => {


        const token = await adminService.connection(req.body);

        if (token) {
            res.status(201).json({ token: token });
        }
        else {
            res.status(401).json({ message: "Utilisateur inexistant ou mot de passe incorrect" });
        };

    },

    getThisAdmin: async (req, res) => {
        try {
            const thisAdmin = await adminService.getThisAdmin(req.headers.authorization);
            console.log(thisAdmin);
            res.status(201).json(thisAdmin);
        }
        catch (error) {
            console.log(error);
        }
    },

    getAll: async (req, res) => {

        const allAdmins = await adminService.getAll();

        if (allAdmins) return res.status(200).json(allAdmins);

        return res.status(404).json({ message: "Ressource introuvable" });
    },

    update: async (req, res) => {
        try {
            const params = req.params.id;
            await adminService.updating(params, req.body);
            res.status(201).json({ message: "Administrateur mise à jour" });
        }
        catch (err) {
            res.status(422).json({ message: "Erreur de données" });
        }
    },

    destroy: async (req, res) => {
        try {
            const params = req.params.id;
            await adminService.destroy(params);
            res.status(201).json({ message: "Administrateur supprimé" });
        }
        catch (err) {
            res.status(404).json({ message: "Administrateur introuvable" });
        }
    }
};

module.exports = adminController;