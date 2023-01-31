const yup = require('yup');


const internshipSchema = yup.object({

    name: yup.string().required(),
    place: yup.string().required(),
    numberAvailable: yup.number("Pas de caractères acceptés").min(1).required(),
    startDate: yup.date().min(new Date(), 'Choisir une date future').required(),
    endDate: yup.date().min(new Date()).required(),
    startHour: yup.string().matches(/^[0-1][0-9]:[0-5][0-9]|[2][0-4]:[0-5][0-9]$/gm).required(),
    endHour: yup.string().matches(/^[0-1][0-9]:[0-5][0-9]|[2][0-4]:[0-5][0-9]$/gm).required(),
    price: yup.number("Pas de caractères acceptés").required(),
    fromAge: yup.number("Pas de caractères acceptés").required(),
});



module.exports = internshipSchema;