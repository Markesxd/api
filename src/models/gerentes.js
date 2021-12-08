const db = require('../database/connection');
const { General } = require('../services');

class Gerente extends General {
  
  constructor(gerente){
    super(gerente);
    this.tableName = 'gerentes'; 
  }

  static init(){
    const sql = `CREATE TABLE IF NOT EXISTS gerentes (
      cpf varchar(20),
      nome varchar(255),
      email varchar(255),
      senha varchar(255),
      PRIMARY KEY (cpf)
    )`
    db.query(sql);
  }
}

module.exports = Gerente;