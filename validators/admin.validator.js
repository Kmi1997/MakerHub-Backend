const yup = require('yup');
const required = "Le champ est requis";
const stringError = "Châine de caractère obligatoire";

const adminSchema = yup.object({
    username: yup.string().typeError(stringError).required("Identifiant: " + required),
    password: yup.string().typeError(stringError).required("Mot de passe: " + required),
    superRoot: yup.bool()
});

module.exports = adminSchema;