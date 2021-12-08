const db = require('../database/connection');
const { General } = require('../services');

class Attendance extends General {
  constructor(attendance) {
    super(attendance);
    this.tableName = 'atendimentos';
  }

  static init() {
    return new Promise((resolve, reject) => {
      const sql = `CREATE TABLE IF NOT EXISTS atendimentos (
        id int AUTO_INCREMENT,
        data date NOT NULL,
        motivo text,
        sintomas varchar(255),
        diagnostico varchar(255),
        retorno date,
        anotacoes text,
        cpf_paciente varchar(20),
        cpf_medico varchar(20),
        PRIMARY KEY (id),
        FOREIGN KEY (cpf_paciente) REFERENCES pacientes (cpf),
        FOREIGN KEY (cpf_medico) REFERENCES medicos (cpf)
      )`;
      db.query(sql, null, (err, result) => {
        if(err){
          reject(err);
        } else {
          resolve(result);
        }
      });
      
    });
  }

  static getListByTime(initialTime, finalTime){
    return new Promise((resolve, reject) =>{
      const sql = `SELECT
       (COUNT(DISTINCT cpf_medico) AS medicos, COUNT(DISTINCT cpf_paciente) AS pacientes, COUNT(id) AS atendimentos)
       FROM ${this.tableName} WHERE data > ${initialTime} AND data < ${finalTime}`;
      db.query(sql, null, (err, results) => {
        if(err){
          reject(err);
        } else {
          resolve(results);
        }
      })
    });
  }
}

module.exports = Attendance;
