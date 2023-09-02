const yup = require('yup');
const requiredInput = (input) =>{
    return "Le champ " + input + " est requis."
};
const stringError = "Chaine de caractère obligatoire";
const numberError = "Nombre obligatoire";

const internSchema = yup.object({

    childName: yup.string().typeError(stringError).required(requiredInput(" 'prénom' ")),
    parentName: yup.string().typeError(stringError).required(requiredInput(" 'nom du parent' ")),
    parentPhone: yup.string().typeError(stringError).required(requiredInput(" 'numéro de GSM' ")),
    age: yup.number().typeError(numberError).required(requiredInput(" 'âge' ")),
    paid: yup.bool().required(requiredInput(" 'payé' ")),
    mail: yup.string().email("Format mail obligatoire").required(requiredInput(" 'email' ")),
    healthIssue: yup.string().typeError(stringError).nullable(),
    internshipId: yup.number().typeError(numberError).required(requiredInput(" 'stage' ")),

});



module.exports = internSchema;