const db = require('../database/connection');
const {General} = require('../services');

class Paciente extends General{
  
  constructor(paciente){
    super(paciente);
    this.tableName = 'pacientes';
  }

  static init(){
    return new Promise((resolve, reject) => {
      const sql = `CREATE TABLE IF NOT EXISTS pacientes (
        cpf varchar(20),
        nome varchar(255) NOT NULL,
        endereco varchar(255) NOT NULL,
        nascimento date,
        email varchar(255),
        telefone varchar(20),
        planoSaude varchar(255),
        nomeMae varchar(255),
        contatoAlternativo varchar(255),
        PRIMARY KEY (cpf)
      )`;
      db.query(sql, null , (err, results) => {
        if(err){
          console.log(err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    })
  }
}

module.exports = Paciente;