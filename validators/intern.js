const yup = require('yup');
const required = "Le champ est requis";
const stringError = "Châine de caractère obligatoire";
const numberError = "Nombre obligatoire";

const internSchema = yup.object({


    childName: yup.string().typeError(stringError).required(required),
    parentName: yup.string().typeError(stringError).required(required),
    parentPhone: yup.string().typeError(stringError).required(required),
    age: yup.number().typeError(numberError).required(required),
    paid: yup.bool().typeError().required(required),
    mail: yup.string().email("Format mail obligatoire").required(required),
    healthIssues: yup.string().typeError(stringError).nullable(),
    imgRights: yup.bool().required(),
    internshipId: yup.number().typeError(numberError).required(required),

});



module.exports = internSchema;