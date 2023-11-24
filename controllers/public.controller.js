const publicService = require('../services/public.service');
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

const publicController = {

    home: async (req, res) => {
        try { res.status(200).render('homePublic'); }
        catch (error) { res.status(500).render('error') }
    },

    internships: async (req, res) => {
        try{
            const internships = await publicService.getInternship();
            internships.forEach(elem => {
                if (elem.image) {
                    elem.image = elem.image.toString('base64');
                }
            });
            res.status(200).render('internshipsPublic', {data : internships});
        }
        catch(err){ res.status(500).render('error'); }
    },

    contact: async (req, res) => {
        res.status(200).render('contact');
    },

    signIn: async (req, res) => {
        try{
            const internship = await publicService.getOneInternship(req.query.internshipId);
            res.status(200).render('signIn', {data : internship,  errors : null});
        }
        catch(err){ res.status(404).render('signIn', {errors : "Le stage n'existe pas.."}); }
    }
}

module.exports = publicController;