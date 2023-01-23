const express = require('express');
const router = express.Router();
const path = require('path');

const skillsController = require('../controllers/skillsController');

router.get('/', skillsController.index);  

module.exports = router;