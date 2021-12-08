const db = require('../database/connection');
const { General } = require('../services');

class Medicament extends General {
  constructor(medicament) {
    super(medicament);
    this.tableName = 'medicamentos';
  }

  static init() {
    return new Promise((resolve, reject) => {
      const sql = `CREATE TABLE IF NOT EXISTS medicamentos (
        id int AUTO_INCREMENT,
        nome varchar(255) NOT NULL,
        dose varchar(255) NOT NULL,
        frequencia varchar(255) NOT NULL,
        id_info int,
        PRIMARY KEY (id),
        FOREIGN KEY (id_info) REFERENCES infoSaude (id)
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
}

module.exports = Medicament;
