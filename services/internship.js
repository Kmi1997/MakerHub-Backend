const db = require("../configDb");

async function addInternship(data){

    await db.Internship.create(data, {});

};

async function getInternship(){

    const internship = await db.Internship.findAll();
    return internship;
};

async function getOne(id){
    
    const internship = await db.Internship.findByPk(id);
    return internship;
};

module.exports = {
    addInternship,
    getInternship,
    getOne
};