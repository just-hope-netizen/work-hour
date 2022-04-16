const express = require('express');

const router = express.Router();
const scheduleController = require('../controller/schedule');

router.get('/', scheduleController.getSchedule);

module.exports = router;
