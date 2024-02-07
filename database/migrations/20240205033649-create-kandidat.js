'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kandidat', {
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
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      jenis_kelamin: {
        type: Sequelize.ENUM("pria","wanita")
      },
      partai: {
        type: Sequelize.STRING
      },
      dapil: {
        type: Sequelize.STRING
      },
      no_urut: {
        type: Sequelize.INTEGER
      },
      id_jabatan: {
        type: Sequelize.INTEGER
      },
      id_admin: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Kandidat');
  }
};