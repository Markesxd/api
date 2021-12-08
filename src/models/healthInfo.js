const db = require('../database/connection');
const { General } = require('../services');

class HealthInfo extends General {
  constructor(info) {
    super(info);
    this.tableName = 'infoSaude';
  }

  static init() {
    return new Promise((resolve, reject) => {
      const sql = `CREATE TABLE IF NOT EXISTS infoSaude(
        id int AUTO_INCREMENT,
        tipoSange varchar(5) NOT NULL,
        cirurgias varchar(255),
        alergias varchar(255),
        doencas varchar(255),
        id_prontuario int,
        PRIMARY KEY (id),
        FOREIGN KEY (id_prontuario) REFERENCES prontuarios (id)
      )`;
      db.query(sql, null, (err, results) => {
        if(err) {
          reject(err);
        } else{
          resolve(results);
        }
      });

    });
  }
}

module.exports = HealthInfo;
