const { DataTypes } = require("sequelize");

const adminModel = (sequelize) => {
    const admin = sequelize.define('Admin', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        superRoot: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    });

    return admin;
};



module.exports = adminModel;