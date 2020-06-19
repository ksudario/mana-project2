const Client = require('../models/client');

module.exports = {
  index,
  addActivity,
  delActivity
};

function index(req, res) {
  Client.find({}, function(err, clients) {
    res.render('clients/index')
      user: req.user
    });
}

function addActivity(req, res) {
  req.user.activities.push(req.body);
  req.user.save(function(err){
    res.redirect('/clients', {name: 'Client'})
  });
}

function delActivity(req, res) {
  req.user.activities.splice(req.params.id, 1);
  req.user.save(function(err){
    res.redirect('/clients', {name: 'Client'})
  });

}
