const { Sequelize } = require("sequelize");
const donationModel = require("./models/Donation");

function launchDB() {
    
    const sequelize = new Sequelize('SCOOLFAMILY', process.env.USERNAME, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql'
    });

    return sequelize;
};

const sequelize = launchDB();


const db = {
    Sequelize, 
    sequelize, 
    Donation : donationModel(sequelize)
};

module.exports = db;


