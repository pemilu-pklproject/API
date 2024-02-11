'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_TPS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Data_TPS.init({
    id_dapil: DataTypes.INTEGER,
    nomor: DataTypes.INTEGER,
    id_saksi: DataTypes.INTEGER,
    id_kandidat: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'TPS',
  });
  return Data_TPS;
};