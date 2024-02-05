'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TPS', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dapil: {
        type: Sequelize.STRING
      },
      nomor: {
        type: Sequelize.INTEGER
      },
      id_saksi: {
        type: Sequelize.INTEGER
      },
      id_kandidat: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TPS');
  }
};