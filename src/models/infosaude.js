'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class infoSaude extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.medicamentos);
      this.hasOne(models.prontuario);
    }
  };
  infoSaude.init({
    tipoSangue: DataTypes.STRING,
    cirurgias: DataTypes.STRING,
    alergias: DataTypes.STRING,
    doencas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'infoSaude',
  });
  return infoSaude;
};