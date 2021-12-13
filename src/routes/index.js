const router = require('express').Router();

const patient = require('./patientRouts');
const attendance = require('./attendanceRouts');
const report = require('./reportRouts');
const doctor = require('./doctorRouts');

router
  .use('/paciente', patient)
  .use('/atendimento', attendance)
  .use('/relatorio', report)
  .use('/medico', doctor);

module.exports = router;
