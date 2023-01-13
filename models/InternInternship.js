const { DataTypes } = require("sequelize");
const InternModel = require("./intern");
const InternshipModel = require("./internship");


const InternInternshipModel = (sequelize) => {
    const InternInternship = sequelize.define('InternInternship', {});

    return InternInternship;
};



module.exports = InternInternshipModel;