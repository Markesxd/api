const Attendance = require('./attendance');
const Exam = require('./exam');
const Manager = require('./manager');
const HealthInfo = require('./healthInfo');
const Medicament = require('./medicament');
const Doctor = require('./doctor');
const Patient = require('./patient');
const MedicalRecords = require('./medicalRecords');

// A ordem dos modelos é essa para não dar erro de chave estrangeira
module.exports = {
  Patient,
  Doctor,
  Manager,
  MedicalRecords,
  Attendance,
  Exam,
  HealthInfo,
  Medicament,
};
