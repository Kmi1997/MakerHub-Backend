const db = require("../configDb");

async function addInternship(data) {

    await db.Internship.create(data, {});

};

async function getInternship() {

    const internship = await db.Internship.findAll();
    return internship;
};

async function getOne(id) {

    const internship = await db.Internship.findByPk(id);
    return internship;
};

async function updating(req, newData) {
    const toUpdate = await getOne(req);
    await toUpdate.update({
        name: newData.name,
        numberPlaces: newData.numberPlaces,
        startDate: newData.startDate,
        endDate: newData.endDate,
        startHour: newData.startHour,
        endHour: newData.endHour,
        place: newData.place,
        fromAge: newData.fromAge,
        price: newData.price
    });

    await toUpdate.save();
};

async function destroy(id) {
    const toDelete = await getOne(id);
    await toDelete.destroy();
    const internship = await db.Internship.findAll();
    return internship;
}

module.exports = {
    addInternship,
    getInternship,
    getOne,
    updating,
    destroy
};