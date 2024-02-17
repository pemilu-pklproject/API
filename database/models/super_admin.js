'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Super_admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Kandidat, {
        foreignKey: 'id_admin',
        sourceKey: 'id',
        as: 'admin'
      })
    }
  }
  Data_Super_admin.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Super_admin',
  });
  return Data_Super_admin;
};