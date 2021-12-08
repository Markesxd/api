const db = require('../database/connection');
const { General } = require('../services');

class InfoSaude extends General {
  
  constructor(info){
    super(info);
    this.tableName = 'infoSaude';
  }

  static init(){
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
    db.query(sql);
  }
}

module.exports = InfoSaude