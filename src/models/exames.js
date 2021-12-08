const db = require('../database/connection');
const { General } = require('../services');

class Exame extends General {
  
  constructor(exame){
    super(exame);
    this.tableName = 'exames';
  }

  static init(){
    const sql = `CREATE TABLE IF NOT EXISTS exames(
      id int AUTO_INCREMENT,
      nome varchar(255) NOT NULL,
      pedido date NOT NULL,
      realizado date,
      resultado text,
      local varchar(255),
      id_prontuario int,
      PRIMARY KEY (id),
      FOREIGN KEY (id_prontuario) REFERENCES prontuarios (id)
    )`;
    
    db.query(sql);
  }

  static drop(){
    const sql = `DROP TABLE exames`;
    db.query(sql);
  }
}

module.exports = Exame