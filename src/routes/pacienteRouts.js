const { PacienteController } = require('../controllers');
const router = require('express').Router();

router
.post('/', PacienteController.add)
.get('/', PacienteController.getList)
.get('/:cpf', PacienteController.getOne)
.patch('/:cpf', PacienteController.alter)
.delete('/:cpf', PacienteController.destroy)

module.exports = router;