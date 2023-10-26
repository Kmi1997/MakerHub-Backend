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
        try { res.status(200).render('menuPublic'); }
        catch (error) { res.status(500).render('error') }
    },

    sendUrl: async (req, res) => {
        try { res.status(200).json({url : process.env.URL.toString()})}
        catch (error) { res.status(500).json({url: null})}
    },

    sendInternships: async (req, res) => {

        try{
            const internships = await publicService.getInternship();
            if (internships.length > 0){
                res.status(200).json({internships});
            }
            else{
                res.status(404).json({internships});
            }
        }
        catch(err){ res.status(500).render('error'); }
    },
}

module.exports = publicController;