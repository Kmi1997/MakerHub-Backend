const db = require("../configDb");

async function addIntern(data){

    await db.Intern.create(data);

};

module.exports = {
    addIntern
}