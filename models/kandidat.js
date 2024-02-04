'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Kandidat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data_Kandidat.init({
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    partai: DataTypes.STRING,
    dapil: DataTypes.STRING,
    no_urut: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Kandidat',
  });
  return Data_Kandidat;
};