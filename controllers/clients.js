const User = require('../models/client');

module.exports = {
  index,
  addEvent,
  delEvent
};

function index(req, res) {
  Client.find({}, function(err, clients) {
    res.render('clients/index', { 
      clients,
      user: req.user
    });
  });
}

function addEvent(req, res) {
  req.user.facts.push(req.body);
  req.user.save(function(err){
    res.redirect('/clients');
  });
}

function delEvent(req, res) {
  req.user.facts.splice(req.params.id, 1);
  req.user.save(function(err){
    res.redirect('/clients');
  });

}
