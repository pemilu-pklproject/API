'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relawan_role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Relawan_role.init({
    role: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Relawan_role',
  });
  return Relawan_role;
};