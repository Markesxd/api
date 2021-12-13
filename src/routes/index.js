const router = require('express').Router();

const patient = require('./patientRouts');
const attendance = require('./attendanceRouts');
const report = require('./reportRouts');
const doctor = require('./doctorRouts');

router
.get('/', (req, res) => res.status(403).send('<h1>Fuck off</h2>'))
.use('/paciente', patient)
.use('/atendimento', attendance)
.use('/relatorio', report)
.use('/medico', doctor)

module.exports = router;
