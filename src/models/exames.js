'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.prontuarios);
    }
  };
  exames.init({
    nome: DataTypes.STRING,
    pedido: DataTypes.DATEONLY,
    realizado: DataTypes.DATEONLY,
    resultado: DataTypes.STRING,
    local: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'exames',
  });
  return exames;
};