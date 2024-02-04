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
    provinsi: DataTypes.STRING,
    kabupaten: DataTypes.STRING,
    kota: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    kelurahan: DataTypes.STRING,
    desa: DataTypes.STRING,
    lingkungan: DataTypes.STRING,
    dusun: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Alamat',
  });
  return Data_Alamat;
};