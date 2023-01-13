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
    }
    catch(error){
        await transaction.rollback();
        console.log(error, "Rollback effectué");
    }
    
};

module.exports = {
    addIntern
}