const { Sequelize } = require("sequelize");
const donationModel = require("./models/Donation");
const internModel = require("./models/intern");

function launchDB() {
    
    const sequelize = new Sequelize('SCOOLFAMILY', process.env.USERNAME, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        logging: false
    });

    return sequelize;
};

const sequelize = launchDB();


const db = {
    Sequelize, 
    sequelize, 
    Donation : donationModel(sequelize),
    Intern : internModel(sequelize)
};

module.exports = db;


