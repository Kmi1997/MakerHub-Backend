const adminService = require("../services/admin.service");
const internshipService = require("../services/internship.service");
const internService = require("../services/intern.service");
const adminController = {

    viewInternships: async (req, res) => {

        try{
            const internships = await internshipService.getInternship();
            res.status(200).render('internships', {data : internships});
        }
        catch(err){ res.status(500).render('error'); }
    },

    viewInterns: async (req, res) => {

        try{
            const interns = await internService.getAll();
            res.status(200).render('interns', {data : interns});
        }
        catch(err){ res.status(500).render('error'); }
    },

    addNewInternship: async (req, res) => {
        try{
            res.status(200).render('addInternship', { errors : null});
        }
        catch(error){ res.status(500).render('error'); }
    },

    editInternship: async (req, res) => {
        try{
            const internship = await internshipService.getOne(req.query.id);
            res.status(200).render('editInternship', {data : internship, errors : null });
        }
        catch{ res.status(500).render('error') }
    },

    addAdminJson: async (req, res) => {

        try {
            const newUser = await adminService.addAdmin(req.body);
            res.status(201).json(newUser)
        }
        catch (error) {
            res.status(500).json("Erreur" + error)
        }
    },

    connection: async (req, res) => {

        if (req.query.param == 'delete_cookie') {
            res.clearCookie('jwt_token');
        }

        try { res.status(200).render('connection', { error : null}) }
        catch(err) { res.status(500).render('error') }
    },

    testConnection: async (req, res) => {

        const token = await adminService.connection(req.body);
        if (token) {
            const internships = await internshipService.getInternship();
            res.status(201).cookie('jwt_token', token, {maxAge:3600000, httpOnly: true}).render('internships',
                {data: internships});
        }
        else {
            res.status(200).render('connection', { error: "Utilisateur inexistant ou mot de passe incorrect." });
        }
    },

    getThisAdmin: async (req, res) => {
        try {
            const thisAdmin = await adminService.getThisAdmin(req.headers.authorization);
            res.status(201).json(thisAdmin);
        }
        catch (error) {
            console.log(error);
        }
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
            res.status(200).json({ message: "Administrateur introuvable" });
        }
    },

    allParams: async (req, res) => {
        const allAdmins = await adminService.getAll();
        res.status(200).render('allParams', { data: allAdmins, errors : null});
    }
};

module.exports = adminController;