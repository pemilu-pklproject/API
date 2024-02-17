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
        as: "jabatan"
      });
      this.belongsTo(models.Wilayah, {
        foreignKey: 'id_wilayah',
        targetKey: 'id',
        as: 'wilayah'
      });
      this.belongsTo(models.Dapil, {
        foreignKey: 'id_dapil',
        targetKey:'id',
        as: 'dapil'
      });
      this.hasMany(models.Pemilih, {
        foreignKey: 'id_kandidat',
        sourceKey: 'id',
        as: 'kandidat'
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
    id_dapil: DataTypes.INTEGER,
    no_urut: DataTypes.STRING,
    id_jabatan: DataTypes.INTEGER,
    id_admin: DataTypes.INTEGER,
    id_wilayah: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Kandidat',
  });
  return Data_Kandidat;
};