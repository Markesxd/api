const db = require('../database/connection');
const { General } = require('../services');

class Exam extends General {
  constructor(exam) {
    super(exam);
    this.tableName = 'exames';
  }

  static init() {
    return new Promise((resolve, reject) => {
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
  
      db.query(sql, null, (err, results) => {
        if(err){
          reject(err);
        } else{
          resolve(results);
        }
      });

    });
  }

  static drop() {
    const sql = 'DROP TABLE exames';
    db.query(sql);
  }
}

module.exports = Exam;
