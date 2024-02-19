'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Kandidat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Calon_jabatan, {
        foreignKey: 'id_jabatan',
        targetKey: 'id',
        as: "jbtn"
      });
      this.belongsTo(models.Wilayah, {
        foreignKey: 'kode_wilayah',
        targetKey: 'kode',
        as: 'wilayah'
      });
      this.belongsTo(models.Dapil, {
        foreignKey: 'kode_dapil',
        targetKey:'kode_dapil',
        as: 'kandidat_dapil'
      });
      this.hasMany(models.Relawan, {
        foreignKey: 'id_kandidat',
        sourceKey: 'id',
        as:'candidate'
      })
      this.hasMany(models.Pemilih, {
        foreignKey: 'id_kandidat',
        sourceKey: 'id',
        as: 'kandidat'
      });
      this.hasMany(models.TPS, {
        foreignKey: 'id_kandidat',
        sourceKey:'id',
        as: 'tps_kandidat'
      });
      this.belongsTo(models.Super_admin, {
        foreignKey: 'id_admin',
        targetKey: 'id',
        as: 'admin'
      });
      this.hasMany(models.Hasil_suara, {
        foreignKey: 'id_kandidat',
        sourceKey: 'id',
        as: 'kandidat_total'
      })
    }
    
  }
  Data_Kandidat.init({
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    jenis_kelamin: DataTypes.ENUM("pria","wanita"),
    partai: DataTypes.STRING,
    kode_dapil: DataTypes.STRING,
    no_urut: DataTypes.STRING,
    id_jabatan: DataTypes.INTEGER,
    id_admin: DataTypes.INTEGER,
    kode_wilayah: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Kandidat',
  });
  return Data_Kandidat;
};