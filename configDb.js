const { Sequelize } = require("sequelize");
const adminModel = require("./models/admin");
const donationModel = require("./models/Donation");
const InternModel = require("./models/intern");
const InternInternshipModel = require("./models/InternInternship");
const InternshipModel = require("./models/internship");


//create db
function launchDB() {
    const sequelize = new Sequelize('SCOOLFAMILY', process.env.USERNAME, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    });

    return sequelize;
};

//db launch 
const sequelize = launchDB();

//models definitions
const db = {
    Sequelize,
    sequelize,
    Donation: donationModel(sequelize),
    Intern: InternModel(sequelize),
    Internship: InternshipModel(sequelize),
    InternIntership: InternInternshipModel(sequelize),
    Admin: adminModel(sequelize)
};

//Many-to-many associations
db.Intern.belongsToMany(db.Internship, {
    through: db.InternIntership,
    primaryKey: 'id'
});

db.Internship.belongsToMany(db.Intern, {
    through: db.InternIntership,
    primaryKey: 'id'
});




module.exports = db;


