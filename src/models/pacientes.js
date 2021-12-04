'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pacientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.prontuarios);
    }
  };
  Pacientes.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    nascimento: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cpf: DataTypes.STRING,
    planoSaude: DataTypes.STRING,
    nomeMae: DataTypes.STRING,
    contatoAlternativo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pacientes',
  });
  return Pacientes;
};