const { Internship } = require("../configDb");
const db = require("../configDb");

async function addIntern(data) {

    //to secure creations
    const transaction = await db.sequelize.transaction();
    const internship = await db.Internship.findByPk(data.internshipId);
    if (!internship.activated){
        return "Le stage n'est pas actif: l'inscription est annulée."
    };

    try {
        const intern = await db.Intern.create(data, { transaction });
        await intern.addInternship(data.internshipId, { transaction });
        await transaction.commit();
        return intern;
    }
    catch (error) {
        await transaction.rollback();
        console.log("Rollback effectué", error);
        return null;
    };

};

async function getAll() {
    const allInterns = await db.Intern.findAll({
        include: {
            model: Internship,
            attributes: ["name"]
        }
    });

    return allInterns;
};

async function descrease(internshipId) {
    const internship = await db.Internship.findByPk(internshipId);
    await internship.increment({ numberAvailable: -1 });
    if (internship < 0) return new Error("Plus de place");
    await internship.save();
};

async function updating(req, newData) {

    const toUpdate = await db.Intern.findByPk(req);

    if (toUpdate.internshipId == newData.internshipId) {
        await toUpdate.update({
            childName: newData.childName,
            parentName: newData.parentName,
            parentPhone: newData.parentPhone,
            paid: newData.paid,
            imgRights: newData.imgRights,
            healthIssue: newData.healthIssue,
            age: newData.age,
            mail: newData.mail,
            internshipId: newData.internshipId
        });
        await toUpdate.save();
        return toUpdate;
    };

    newData.id = toUpdate.id;
    await toUpdate.destroy();
    const newIntern = await db.Intern.create(newData);
    await newIntern.addInternship(newData.internshipId);
    return newIntern;

};

async function destroy(id) {
    const toDelete = await db.Intern.findByPk(id);
    const upInternship = await db.Internship.findByPk(toDelete.internshipId);
    await upInternship.update({
        numberAvailable : upInternship.numberAvailable + 1
    });

    await toDelete.destroy();
    const intern = await db.Intern.findAll();
    return intern;
};

module.exports = {
    addIntern,
    descrease,
    getAll,
    updating,
    destroy
};