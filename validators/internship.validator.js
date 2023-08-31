const yup = require('yup');
const errorHour = "Le format heure doit être respecté";
const tomorrow = new Date().getDate() + 1;

const internshipSchema = yup.object({

    name: yup.string().required("Le nom est obligatoire"),
    place: yup.string().required("Le lieu est obligatoire"),

    numberPlaces: yup.number().min(1).typeError('Entrez un nombre supérieur ou égal à 1').required("Le nombre de place est obligatoire"),
    startDate: yup.date().typeError("Format date obligatoire").min(new Date(tomorrow), 'Choisir une date future').required("La date de début est obligatoire"),
    endDate: yup.date().typeError("Format date obligatoire").min(new Date(tomorrow), 'Pas de date dans le passé :o').required("La date de fin est obligatoire"),

    startHour: yup.string().matches(/^([0-1][0-9]|2[0-4]):[0-5][0-9]$/, errorHour).required("L'heure est obligatoire"),
    endHour: yup.string().matches(/^([0-1][0-9]|2[0-4]):[0-5][0-9]$/, errorHour).required("L'heure est obligatoire"),
    price: yup.number().typeError("Nombre obligatoire").required("Le prix est obligatoire"),

    fromAge: yup.number()
        .typeError('L\'âge doit être un nombre valide supérieur à 1')
        .min(1, 'L\'âge doit être minimum 1 an')
        .required('L\'âge est obligatoire'),
});



module.exports = internshipSchema;