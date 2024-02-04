'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alamat', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      provinsi: {
        type: Sequelize.STRING
      },
      kabupaten: {
        type: Sequelize.STRING
      },
      kota: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      kelurahan: {
        type: Sequelize.STRING
      },
      desa: {
        type: Sequelize.STRING
      },
      lingkungan: {
        type: Sequelize.STRING
      },
      dusun: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Alamat');
  }
};