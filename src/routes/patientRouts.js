const router = require('express').Router();

const { PatientController } = require('../controllers');

router
  .post('/', PatientController.add)
  .get('/', PatientController.getList)
  .get('/:cpf', PatientController.getOne)
  .patch('/:cpf', PatientController.alter)
  .delete('/:cpf', PatientController.destroy);

module.exports = router;
