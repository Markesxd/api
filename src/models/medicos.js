const db = require('../database/connection');
const { General } = require('../services');

class Medico extends General {

  
  constructor(medico){
    super(medico);
    this.tableName = 'medicos';
  }

  static init(){
    const sql = `CREATE TABLE IF NOT EXISTS medicos (
      cpf varchar(20),
      nome varchar(255) NOT NULL,
      crm varchar(15) NOT NULL,
      telefone varchar(20),
      email varchar(255),
      especialidade varchar(255) NOT NULL,
      descricao varchar(255) NOT NULL,
      PRIMARY KEY (cpf)
    )`;
    db.query(sql);
  }
}

module.exports = Medico;