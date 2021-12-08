const db = require('../database/connection');
const { General } = require('../services');

class MedicalRecords extends General {
  constructor(medicalRecords) {
    super(medicalRecords);
    this.tableName = 'prontuarios';
  }

  static init() {
    const sql = `CREATE TABLE IF NOT EXISTS prontuarios (
      id int AUTO_INCREMENT,
      cpf_paciente varchar(20) NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (cpf_paciente) REFERENCES pacientes (cpf)
      )`;
    db.query(sql);
  }
}

module.exports = MedicalRecords;
