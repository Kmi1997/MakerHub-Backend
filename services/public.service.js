const db = require("../configDb");

async function getInternship() {
    const internship = await db.Internship.findAll({
        where: { activated : true }
    });
    return internship;
};

module.exports = {
    getInternship
};