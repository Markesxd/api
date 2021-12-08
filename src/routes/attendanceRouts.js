const router = require('express').Router();

const {DoctorController} = require('../controllers');

router
.post('/', DoctorController.createAttendance)
.patch('/', DoctorController.alterAttendance)
.get('/', DoctorController.getAttendanceList)

module.exports = router;