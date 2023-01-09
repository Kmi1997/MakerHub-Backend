const { DataTypes } = require("sequelize");

const InternshipModel = (sequelize) => {

    const Internship = sequelize.define('Internship', {
    
        name : {
           type: DataTypes.STRING,
           allowNull: false,
        },
        numberAvailable : {
           type : DataTypes.INTEGER,
           allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        theme : {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        place:  {
            type: DataTypes.STRING,
            allowNull: false
        },
        fromAge: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue : 4
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: true
        }
       });

       return Internship;

       
};

module.exports = InternshipModel;