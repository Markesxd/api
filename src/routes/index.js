const router = require('express').Router();

const patient = require('./pacienteRouts');

router.use('/paciente', patient);

module.exports = router;
