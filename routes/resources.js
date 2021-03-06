const express = require('express');
const router = express.Router();
const resourcesCtrl = require('../controllers/resources');

router.get('/', resourcesCtrl.index);
router.get('/new', resourcesCtrl.new);
router.get('/:id', resourcesCtrl.show);
router.post('/', resourcesCtrl.create);


module.exports = router;