'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Relawan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      no_wa: {
        type: Sequelize.STRING
      },
      id_role: {
        type: Sequelize.INTEGER
      },
      id_kandidat: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Relawan');
  }
};