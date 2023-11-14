const db = require("../configDb");

async function getInternship() {
    const internship = await db.Internship.findAll({
        where: { activated : true }
    });
    console.log(internship)
    return internship;
};

module.exports = {
    getInternship
};