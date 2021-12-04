'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class atendimentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.prontuarios, {foreignKey: 'id_prontuario'});
      this.hasOne(models.medicos, {foreignKey: 'cpf_medico'});   
    }
  };
  atendimentos.init({
    data: DataTypes.DATEONLY,
    motivo: DataTypes.STRING,
    sintomas: DataTypes.STRING,
    diagnostico: DataTypes.STRING,
    retorno: DataTypes.DATEONLY,
    anotacoes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'atendimentos',
  });
  return atendimentos;
};