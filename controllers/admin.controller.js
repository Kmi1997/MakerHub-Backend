
const adminService = require("../services/admin.service");

const adminController = {

    addAdmin: async (req, res) => {

        try {
            await adminService.AddAdmin(req.body);
            res.status(201).json({ message: "Administrateur créé" });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        };
    }
};

module.exports = adminController;