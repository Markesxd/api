const router = require('express').Router();

const {ManagerController} = require('../controllers');

router
.get('/tempo/:initialDate/:finalDate', ManagerController.timeReport)

module.exports = router;