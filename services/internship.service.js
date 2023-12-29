const db = require("../configDb");

async function addInternship(data) {
    data.numberAvailable = data.numberPlaces;
    await db.Internship.create(data, {});
};

async function getInternship(attribute = []) {
    let internship = null;
    if (attribute.length > 0) {
        internship = await db.Internship.findAll({attributes: attribute});
    }
    else {
        internship = await db.Internship.findAll();
    }
    return internship;
}

async function getOne(id) {
    const internship = await db.Internship.findByPk(id);
    return internship;
}

async function updating(req, newData) {

    const toUpdate = await getOne(req);

    if (toUpdate.numberAvailable < toUpdate.numberPlaces){
        const test = toUpdate.numberAvailable + (newData.numberPlaces - toUpdate.numberPlaces)
        console.log(test)
        await toUpdate.update({
            numberPlaces: newData.numberPlaces,
            numberAvailable: test
        });
    }
    else{
        await toUpdate.update({
            name: newData.name,
            numberPlaces: newData.numberPlaces,
            numberAvailable: newData.numberPlaces,
            startDate: newData.startDate,
            endDate: newData.endDate,
            startHour: newData.startHour,
            endHour: newData.endHour,
            place: newData.place,
            fromAge: newData.fromAge,
            price: newData.price,
            desc: newData.desc,
            activated: newData.activated
        });
    };
    await toUpdate.save();
};

async function destroy(id) {
    const toDelete = await getOne(id);
    return await toDelete.destroy();
};

module.exports = {
    addInternship,
    getInternship,
    getOne,
    updating,
    destroy
};