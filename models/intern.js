const { DataTypes } = require("sequelize");

const InternModel = (sequelize) => {

    const Intern = sequelize.define('Intern', {
        ChildName : {
           type: DataTypes.STRING,
           allowNull: false,
        },
        ParentName : {
           type : DataTypes.STRING,
           allowNull: false
        },
        ParentPhone: {
            type: DataTypes.STRING,
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
        healthIssue : {
            type: DataTypes.STRING,
            allowNull: true
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
       });
    
       return Intern;
};



module.exports = InternModel;