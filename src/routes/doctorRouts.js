const router = require('express').Router();
const { DoctorController } = require('../controllers');

router
  .post('/', DoctorController.add)
  .get('/', DoctorController.getList)
  .get('/:cpf', DoctorController.getOne);

module.exports = router;
