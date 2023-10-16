const { Sequelize } = require("sequelize");
const adminModel = require("./models/admin");
const InternModel = require("./models/intern");
const InternInternshipModel = require("./models/InternInternship");
const InternshipModel = require("./models/internship");

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});


//create db
function launchDB() {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
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
    Intern: InternModel(sequelize),
    Internship: InternshipModel(sequelize),
    InternInternship: InternInternshipModel(sequelize),
    Admin: adminModel(sequelize)
};

//Many-to-many associations
db.Intern.belongsToMany(db.Internship, {
    through: db.InternInternship,
    primaryKey: 'id',
});

db.Internship.belongsToMany(db.Intern, {
    through: db.InternInternship,
    primaryKey: 'id'

});

module.exports = db;


