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
        startHour : {
            type: DataTypes.STRING(5),
                validate:{
                is: /^[0-1][0-9]:[0-5][0-9]|[2][0-4]:[0-5][0-9]$/gm
                },
            allowNull: false
        },
        endHour : {
            type: DataTypes.STRING(5),
            validate:{
                is: /^[0-1][0-9]:[0-5][0-9]|[2][0-4]:[0-5][0-9]$/gm
            },
            allowNull: false
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
            type: DataTypes.STRING(100),
            allowNull: true
        }
       });

       return Internship;

       
};

module.exports = InternshipModel;