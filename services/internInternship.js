const db = require("../configDb");

async function addInternInternship(data){

    await db.InternInternship.create(data);

};

module.exports = {
    addInternInternship
};