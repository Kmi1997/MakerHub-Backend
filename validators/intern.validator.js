const yup = require('yup');

const requiredInput = (input) =>{
    return "Le champ " + input + " est requis."
};
const stringError = "Chaine de caractère obligatoire";
const phoneRegex = /^(\+32\s?|0)([1-9])([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})$/;

const internSchema = yup.object({

    childName: yup.string().typeError(stringError).required(requiredInput(" 'prénom' ")),
    parentName: yup.string().typeError(stringError).required(requiredInput(" 'nom du parent' ")),
    parentPhone: yup.string().matches(phoneRegex, "Numéro de GSM invalide").typeError(stringError).required(requiredInput(" 'numéro de GSM' ")),
    age: yup.string().typeError(stringError).required(requiredInput(" 'âge' ")),
    mail: yup.string().email("Format mail obligatoire").required(requiredInput(" 'email' ")),
    internshipId: yup.string().typeError(stringError).required(requiredInput(" 'stage' ")),

});



module.exports = internSchema;