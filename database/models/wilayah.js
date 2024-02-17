'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Wilayah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  }
  Data_Wilayah.init({
    kode: DataTypes.STRING,
    nama: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    id: false,
    modelName: 'Wilayah',
  });
  return Data_Wilayah;
};