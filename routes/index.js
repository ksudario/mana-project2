const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res) {
  res.render('index', {
    user: req.user
  });
});

router.get('/', function(req, res) {
    res.redirect('/resources');
  });

//Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {scope: ['profile', 'email']}
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/clients',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
  

