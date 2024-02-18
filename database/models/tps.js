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
      this.belongsTo(models.Wilayah, {
        foreignKey: 'kode_wilayah',
        targetKey: 'kode',
        as: 'tps_wilayah'
      });
      this.belongsTo(models.Kandidat, {
        foreignKey: 'id_kandidat',
        targetKey: 'id',
        as: 'tps_kandidat'
      });
      this.belongsTo(models.Relawan, {
        foreignKey: 'id_saksi',
        targetKey:'id',
        as: 'saksi'
      });
      this.hasOne(models.Hasil_suara, {
        foreignKey: 'id_tps',
        sourceKey: 'id',
        as: 'suara'
      })
    }
  }
  Data_TPS.init({
    kode_wilayah: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    nomor: DataTypes.INTEGER,
    id_saksi: DataTypes.INTEGER,
    nama_kpps: DataTypes.STRING,
    id_kandidat: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'TPS',
  });
  return Data_TPS;
};