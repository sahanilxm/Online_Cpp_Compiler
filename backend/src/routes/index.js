const express = require('express');
const router = express.Router();

const { getStatus, runCode } = require('../controllers/index.js');

router.get('/status', getStatus);
router.post('/run', runCode);


module.exports = router;