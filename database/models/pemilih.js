'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Pemilih extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.TPS,{
        foreignKey: 'id_tps',
        targetKey: 'id'
      });
      this.belongsTo(models.Wilayah, {
        foreignKey: 'id_wilayah',
        targetKey: 'id'
      })
    }
  }
  Data_Pemilih.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    nik: DataTypes.STRING,
    id_kandidat: DataTypes.INTEGER,
    no_hp: DataTypes.STRING,
    jenis_kelamin: DataTypes.ENUM("pria","wanita"),
    id_relawan: DataTypes.INTEGER,
    id_tps: DataTypes.INTEGER,
    alamat: DataTypes.STRING,
    rt_rw: DataTypes.STRING,
    id_wilayah: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    freezeTableName:true,
    modelName: 'Pemilih',
  });
  return Data_Pemilih;
};