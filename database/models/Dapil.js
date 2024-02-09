'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_dapil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data_dapil.init({
    kode: DataTypes.STRING,
    nama: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    id: false,
    modelName: 'Dapil',
  });
  return Data_dapil;
};