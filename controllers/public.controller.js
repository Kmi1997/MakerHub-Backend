const internshipService = require("../services/internship.service");
const fetch = require('node-fetch');
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

const publicController = {

    internships: async (req, res) => {
        try{
            const internships = await internshipService.getInternship();
            await Promise.all(internships.map(async (elem) => {
                if (elem.image) {
                    elem.image = elem.image.toString('base64');
                }
                try {
                    elem.geo = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(elem.place)}`)
                    elem.geo = await elem.geo.json();
                    elem.geo = {lat: elem.geo[0].lat, lon: elem.geo[0].lon}
                }
                catch(error) { elem.geo = null }
            }));
            res.status(200).render('internshipsPublic', {data : internships});
        }
        catch(err){ res.status(500).render('error'); }
    },

    contact: async (req, res) => {
        res.status(200).render('contact');
    },

    signIn: async (req, res) => {
        try{
            const internship = await internshipService.getOne(req.query.internshipId);
            res.status(200).render('signIn', {data : internship,  errors : null});
        }
        catch(err){ res.status(404).render('signIn', {errors : "Le stage n'existe pas.."}); }
    },

    gallery: async (req, res) => {
        const oldInternships = await internshipService.getOldInternships();
        res.status(200).render('gallery', {data: oldInternships});
    }
}

module.exports = publicController;