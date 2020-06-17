const router = require('express').Router();
const clientsCtrl = require('../controllers/clients');

// GET /clients
router.get('/clients', clientsCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/events', clientsCtrl.addEvent);

// DELETE /facts/:id
router.delete('/events/:id', clientsCtrl.delEvent);

module.exports = router;