const db = require("../configDb");

async function getInternship() {
    const internship = await db.Internship.findAll({
        where: { activated : true, numberAvailable: {[db.Sequelize.Op.gt] : 0} }
    });
    return internship;
};

async function getOneInternship(id) {
    const internship = await db.Internship.findOne({where: {id: id}});
    return internship;
}

module.exports = {
    getInternship,
    getOneInternship
};