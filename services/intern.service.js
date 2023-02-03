const { Internship, Intern } = require("../configDb");
const db = require("../configDb");

async function addIntern(data) {

    //to secure creations
    const transaction = await db.sequelize.transaction();

    try {

        const intern = await db.Intern.create(data, { transaction });

        await intern.addInternship(data.internshipId, { transaction });
        //  --> "magic method"

        // await intern.add(db.Internship, data.internshipId, {transaction}); -- other method
        await transaction.commit();
        return intern;
    }
    catch (error) {
        await transaction.rollback();
        console.log("Rollback effectué", error);

        return null;
    }

};

async function getAll() {
    const allInterns = await db.Intern.findAll({
        include: {
            model: Internship,
            attributes: ["name"]
        }
    });
    return allInterns;
}

async function descrease(internshipId) {
    const internship = await db.Internship.findByPk(internshipId);
    await internship.increment({ numberAvailable: -1 });
    if (internship < 0) return new Error("Plus de place");
    await internship.save();
};

module.exports = {
    addIntern,
    descrease,
    getAll
};