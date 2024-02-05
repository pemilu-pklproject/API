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
      email: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      id_kandidat: {
        type: Sequelize.INTEGER
      },
      no_hp: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.ENUM("pria","wanita")
      },
      id_relawan: {
        type: Sequelize.INTEGER
      },
      id_tps: {
        type: Sequelize.INTEGER
      },
      id_alamat: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pemilih');
  }
};