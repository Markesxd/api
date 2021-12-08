const db = require('../database/connection');
const { General } = require('../services');

class Manager extends General {
  constructor(manager) {
    super(manager);
    this.tableName = 'gerentes';
  }

  static init() {
    return new Promise((resolve, reject) => {
      const sql = `CREATE TABLE IF NOT EXISTS gerentes (
        cpf varchar(20),
        nome varchar(255),
        email varchar(255),
        senha varchar(255),
        PRIMARY KEY (cpf)
      )`;
      db.query(sql, null, (err, results) => {
        if(err) {
          reject(err);
        } else {
          resolve(results);
        }
      });

    });
  }

  timeReport(initialDate, finalDate){
    
  }
}

module.exports = Manager;
