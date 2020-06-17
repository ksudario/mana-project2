const express = require('express');
const router = express.Router();
const infosCtrl = require('../controllers/infos');

router.get('/', infosCtrl.info);

module.exports = router;