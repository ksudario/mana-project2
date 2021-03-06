const Client = require('../models/client');

module.exports = {
  index,
  addActivity,
  delActivity,
  updateActivity
};

function index(req, res) {
  Client.find({}, function(err, clients) {
    res.render('clients/index', {
      clients,
      user: req.user
    });
  });
}

function addActivity(req, res) {
  req.user.activities.push(req.body);
  req.user.save(function(err){
    res.redirect('/clients');
  });
}

function delActivity(req, res) {
  req.user.activities.splice(req.params.id, 1);
  req.user.save(function(err){
    res.redirect('/clients');
  });

}

function updateActivity (req, res) {
  const activity = req.user.activities.id(req.params.id);
  activity.overwrite(req.body);
  req.user.save(function() {
    res.redirect('/clients');
  });
}

