const db = require("../configDb");

async function getInternship() {
    const internship = await db.Internship.findAll({attributes: { exclude: ["activated"]}});
    return internship;
};

module.exports = {
    getInternship
};