const router = require('express').Router();

const { PacienteController } = require('../controllers');

router
  .post('/', PacienteController.add)
  .get('/', PacienteController.getList)
  .get('/:cpf', PacienteController.getOne)
  .patch('/:cpf', PacienteController.alter)
  .delete('/:cpf', PacienteController.destroy);

module.exports = router;
