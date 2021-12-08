const Attendance = require('./atendimentos');
const Exam = require('./exames');
const Manager = require('./gerentes');
const HealthInfo = require('./infosaude');
const Medicament = require('./medicamentos');
const Doctor = require('./medicos');
const Patient = require('./pacientes');
const MedicalRecords = require('./prontuarios');

// A ordem dos modelos é essa para não dar erro de chave estrangeira
module.exports = {
  Attendance,
  Doctor,
  Exam,
  HealthInfo,
  Manager,
  MedicalRecords,
  Medicament,
  Patient,
};
