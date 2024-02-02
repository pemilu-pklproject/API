'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pemilih', {
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
      id_kandidat: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      no_wa: {
        type: Sequelize.STRING
      },
      id_relawan: {
        type: Sequelize.INTEGER
      },
      id_tps: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pemilih');
  }
};