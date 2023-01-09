const db = require("../configDb");

async function addInternship(data){

    await db.Internship.create(data);

};

module.exports = {
    addInternship
}