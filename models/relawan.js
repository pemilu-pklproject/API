'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Relawan.init({
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    password: DataTypes.STRING,
    no_wa: DataTypes.STRING,
    id_role: DataTypes.INTEGER,
    id_kandidat: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Relawan',
  });
  return Relawan;
};