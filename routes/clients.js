const router = require('express').Router();
const clientsCtrl = require('../controllers/clients');

router.get('/clients', clientsCtrl.index);

router.post('/activities', clientsCtrl.addActivity);

router.delete('/activities/:id', clientsCtrl.delActivity);

router.put('/activities/:id', clientsCtrl.updateActivity);

module.exports = router;
