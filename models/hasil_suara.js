'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Hasil_Suara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data_Hasil_Suara.init({
    id_tps: DataTypes.INTEGER,
    id_kandidat: DataTypes.INTEGER,
    dokumen: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Hasil_suara',
  });
  return Data_Hasil_Suara;
};