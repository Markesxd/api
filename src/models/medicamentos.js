'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.infoSaude, {foreignKey: 'id_infoSaude'})
    }
  };
  medicamentos.init({
    nome: DataTypes.STRING,
    dose: DataTypes.STRING,
    frequencia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'medicamentos',
  });
  return medicamentos;
};