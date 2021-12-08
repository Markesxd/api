const db = require('../database/connection');
const { General } = require('../services');

class Atendimento extends General {
  
  constructor(atendimento){
    super(atendimento);
    this.tableName = 'atendimentos';
  }

  static init(){
    const sql = `CREATE TABLE IF NOT EXISTS atendimentos (
      id int AUTO_INCREMENT,
      data date NOT NULL,
      motivo text,
      sintomas varchar(255),
      diagnostico varchar(255),
      retorno date,
      anotacoes text,
      id_prontuario int,
      cpf_medico varchar(20),
      PRIMARY KEY (id),
      FOREIGN KEY (id_prontuario) REFERENCES prontuarios (id),
      FOREIGN KEY (cpf_medico) REFERENCES medicos (cpf)      
    )`
    db.query(sql);
  }
}

module.exports = Atendimento