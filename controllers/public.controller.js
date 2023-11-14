const publicService = require('../services/public.service');
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

const publicController = {

    home: async (req, res) => {
        try { res.status(200).render('homePublic'); }
        catch (error) { res.status(500).render('error') }
    },

    menu: async (req, res) => {
        try{
            const internships = await publicService.getInternship();
            internships.forEach(elem => {
                if (elem.dataValues.image) {
                    elem.image = elem.image.toString('base64');
                }
            });
            res.status(200).render('menuPublic', {data : internships});
        }
        catch(err){ res.status(500).render('error'); }
    },

    sendUrl: async (req, res) => {
        try { res.status(200).json({url : process.env.URL.toString()})}
        catch (error) { res.status(500).json({url: null})}
    },

}

module.exports = publicController;