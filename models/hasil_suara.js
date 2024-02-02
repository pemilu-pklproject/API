'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hasil_suara extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Hasil_suara.init({
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
  return Hasil_suara;
};