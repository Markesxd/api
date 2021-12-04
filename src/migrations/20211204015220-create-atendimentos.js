'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('atendimentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      motivo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sintomas: {
        allowNull: false,
        type: Sequelize.STRING
      },
      diagnostico: {
        allowNull: false,
        type: Sequelize.STRING
      },
      retorno: {
        type: Sequelize.DATEONLY
      },
      anotacoes: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('atendimentos');
  }
};