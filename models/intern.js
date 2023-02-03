const { DataTypes } = require("sequelize");



const InternModel = (sequelize) => {

    const Intern = sequelize.define('Intern', {

        childName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parentName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        parentPhone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mail: {
            type: DataTypes.STRING,
            validate: {
                isEmail: { msg: "Format mail requis" }
            },
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        healthIssue: {
            type: DataTypes.STRING,
            allowNull: true
        },
        imgRights: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        internshipId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    return Intern;
};



module.exports = InternModel;