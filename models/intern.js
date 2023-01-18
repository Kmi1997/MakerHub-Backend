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
            validate:{
                is: /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/gm
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
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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