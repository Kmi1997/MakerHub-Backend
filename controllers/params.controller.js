
const paramsService = require("../services/params.service");

const paramsController = {

    addParams: async (req, res) => {

        const params = await paramsService.addParams();
        if (params) {
            await paramsService.addParams(req.body);
            res.status(201).json({ message: "Paramètres ajoutés" });
        }
        res.status(500).json({ error: error.message });
    },
};

module.exports = paramsController;
