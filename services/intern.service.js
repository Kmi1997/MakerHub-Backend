const db = require("../configDb");

async function addIntern(data){

    //to secure creations
    const transaction = await db.sequelize.transaction();

    try{
        const intern = await db.Intern.create(data, {transaction});

        await intern.addInternship(data.internshipId, {transaction});
        //  --> "magic method"
        
        // await intern.add(db.Internship, data.internshipId, {transaction}); -- other method
        await transaction.commit();
        return intern;
    }
    catch(error){
        await transaction.rollback();
        console.log("Rollback effectué", error);
        
        return null;
  }
    
};

//get id to get internship name
async function getHisInternship(childId){
    const internship = await db.InternIntership.findByPk(childId);
    return internship;
};

module.exports = {
    addIntern,
    getHisInternship
}