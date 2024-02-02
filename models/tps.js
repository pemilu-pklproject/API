'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TPS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TPS.init({
    dapil: DataTypes.STRING,
    nomor: DataTypes.INTEGER,
    id_saksi: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'TPS',
  });
  return TPS;
};