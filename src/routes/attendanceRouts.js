const router = require('express').Router();

const {DoctorController} = require('../controllers');

router
.post('/', DoctorController.createAttendance)

module.exports = router;