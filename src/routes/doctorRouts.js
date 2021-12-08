const { DoctorController } = require('../controllers');

const router = require('express').Router();

router
.post('/', DoctorController.add)
.get('/', DoctorController.getList)

module.exports = router;