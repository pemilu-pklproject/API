'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Calon_jabatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Calon_jabatan.hasMany(models.Kandidat, {
        foreignKey: 'id_jabatan',
        sourceKey: 'id'
      });
    }
  }
  Data_Calon_jabatan.init({
    jabatan: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Calon_jabatan',
  });
  return Data_Calon_jabatan;
};