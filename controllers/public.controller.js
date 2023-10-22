const publicController = {

    home: async (req, res) => {
        try { res.status(200).render('homePublic'); }
        catch (error) { res.status(500).render('error') }
    },
}

module.exports = publicController;