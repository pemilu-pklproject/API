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
      this.belongsTo(models.Relawan, {
        foreignKey: 'id_saksi',
        targetKey: 'id'
      });
      this.hasMany(models.Hasil_suara,{
        foreignKey: 'id_tps',
        sourceKey: 'id'
      });
      this.hasMany(models.Pemilih, {
        foreignKey: 'id_tps',
        sourceKey: 'id'
      });
      this.belongsTo(models.Dapil, {
        foreignKey: 'id_dapil',
        targetKey: 'id'
      })
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