const yup = require('yup');
const required = "Le champ est requis";
const stringError = "Chaine de caractère obligatoire";
const numberError = "Nombre obligatoire";

const internSchema = yup.object({


    childName: yup.string().typeError(stringError).required(required),
    parentName: yup.string().typeError(stringError).required(required),
    parentPhone: yup.string().typeError(stringError).required(required),
    age: yup.number().typeError(numberError).required(required),
    paid: yup.bool().required(required),
    mail: yup.string().email("Format mail obligatoire").required(required),
    healthIssue: yup.string().typeError(stringError).nullable(),
    internshipId: yup.number().typeError(numberError).required(required),

});



module.exports = internSchema;