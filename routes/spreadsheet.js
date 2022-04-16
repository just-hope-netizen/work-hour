const express = require('express');

const router = express.Router();
const spreadsheetController = require('../controller/spreadsheet');

router.get('/schedule', spreadsheetController.getSpreadsheet);

router.post('/schedule', spreadsheetController.postSpreadsheet);

module.exports = router;
