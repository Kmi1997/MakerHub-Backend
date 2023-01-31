
const adminService = require("../services/admin.service");

const adminController = {

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
    }
};

module.exports = adminController;