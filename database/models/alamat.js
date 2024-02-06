'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Alamat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data_Alamat.init({
    alamat: DataTypes.STRING,
    rt_rw: DataTypes.STRING,
    kel_desa: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kab_kota: DataTypes.STRING,
    provinsi: DataTypes.STRING,
    id_pemilih: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Alamat',
  });
  return Data_Alamat;
};