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
      this.hasMany(models.Kandidat,{
        foreignKey: 'id_dapil',
        sourceKey: 'id'
      });
      this.hasMany(models.TPS, {
        foreignKey: 'id_dapil',
        sourceKey: 'id'
      })
    }
  }
  Data_dapil.init({
    kode_dapil: DataTypes.STRING,
    jenis_dapil: DataTypes.STRING,
    nama_dapil: DataTypes.STRING,
    kode_wilayah: DataTypes.STRING,
    tingkatan_wilayah: DataTypes.STRING,
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