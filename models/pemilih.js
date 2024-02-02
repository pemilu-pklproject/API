'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pemilih extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pemilih.init({
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    id_kandidat: DataTypes.INTEGER,
    password: DataTypes.STRING,
    no_wa: DataTypes.STRING,
    id_relawan: DataTypes.INTEGER,
    id_tps: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Pemilih',
  });
  return Pemilih;
};