const router = require('express').Router();

const {ManagerController} = require('../controllers');

router
.get('/tempo', ManagerController.timeReport)

module.exports = router;