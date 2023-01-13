const db = require("../configDb");

async function addInternship(data){

    await db.Internship.create(data, {});

};

async function getInternship(){

    const internship = await db.Internship.findAll();
    return internship;
};

module.exports = {
    addInternship,
    getInternship
};