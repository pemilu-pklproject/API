'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_Relawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Kandidat, {
        foreignKey: 'id_kandidat',
        targetKey: 'id',
        as: 'candidate'
      });
      this.hasOne(models.TPS, {
        foreignKey: 'id_saksi',
        sourceKey: 'id',
        as: 'saksi'
      });
      this.hasMany(models.Pemilih, {
        foreignKey:'id_relawan',
        sourceKey:'id',
        as:'relawan'
      })
    }
    
  }
  Data_Relawan.init({
    nama: DataTypes.STRING,
    nik: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    jenis_kelamin: DataTypes.ENUM("pria","wanita"),
    no_hp: DataTypes.STRING,
    id_kandidat: DataTypes.INTEGER,
    isRelawan: DataTypes.BOOLEAN,
    isSaksi: DataTypes.BOOLEAN
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Relawan',
  });
  return Data_Relawan;
};