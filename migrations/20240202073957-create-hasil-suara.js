'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hasil_suara', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tps: {
        type: Sequelize.INTEGER
      },
      id_kandidat: {
        type: Sequelize.INTEGER
      },
      dokumen: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hasil_suara');
  }
};