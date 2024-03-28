'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Pictures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      internship_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Internships',
          key: 'id'
        }
      },
      picture: {
        type: DataTypes.BLOB('long'), // Le type de données pour la photo
        allowNull: true
      },
      picture_name: {
        type: DataTypes.STRING, // Le nom de la photo
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Pictures');
  }
};
