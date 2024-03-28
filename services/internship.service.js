const db = require("../configDb");
const { Op } = require("sequelize");
async function addInternship(data) {
    data.numberAvailable = data.numberPlaces;
    await db.Internship.create(data, {});
}

async function getInternship(attribute = [], activated= null) {
    let internship;
    let activatedCondition = {};
    if (activated != null){
        activatedCondition = { activated: activated};
    }
    if (attribute.length > 0) {
        internship = await db.Internship.findAll({
            attributes: attribute,
            where: { endDate: {[Op.gte]: new Date()}, ...activatedCondition}
        });
    }
    else {
        internship = await db.Internship.findAll({
            where: { endDate: {[Op.gte]: new Date()}, ...activatedCondition}
        });
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
        await toUpdate.update({
            numberAvailable: test
        });
    }
    else{
        await toUpdate.update({
            numberAvailable: newData.numberPlaces,
        });
    }
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
        activated: newData.activated,
        image: newData.image
    });
    await toUpdate.save();
}

async function destroy(id) {
    const toDelete = await getOne(id);
    return await toDelete.destroy();
}

async function getOldInternships(attribute = [], picture){
    let oldInternships;
    try{
        if (attribute.length == 0){
            oldInternships =  await db.Internship.findAll({
                where: { endDate: {[Op.lt]: new Date()}, activated: false},
                include: [{
                    model: db.Picture
                }]
            });
        }
        else{
            oldInternships =  await db.Internship.findAll({
                attributes: attribute,
                where: { endDate: {[Op.lt]: new Date()}, activated: false},
                include: [{
                    model: db.Picture
                }]
            });
        }
    }catch (error) { console.log(error)}

    return oldInternships
}

module.exports = {
    addInternship,
    getInternship,
    getOne,
    updating,
    destroy,
    getOldInternships
};