const router = require('express').Router();
const paciente = require('./pacienteRouts');

router.use('/paciente', paciente);

module.exports = router;