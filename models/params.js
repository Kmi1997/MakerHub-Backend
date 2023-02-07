const { DataTypes } = require("sequelize");

const paramsModel = (sequelize) => {
    const params = sequelize.define('Params', {
        fonts: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        bgColors: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    return params;
};



module.exports = paramsModel;