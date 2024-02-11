const { DataTypes } = require("sequelize");

const PicturesModel = (sequelize) => {

    const Pictures = sequelize.define('Pictures', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            internship_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                picture: {
                    type: DataTypes.BLOB('long'),
                    allowNull: true
                },
                picture_name: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
            }

        }
    );
    return Pictures;
};



module.exports = PicturesModel;