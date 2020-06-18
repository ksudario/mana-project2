const passport = require('passport');
const Client = require('../models/client')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    CLient.findOne({ 'googleId': profile.id }, function(err, client) {
      if (err) return cb(err);
      if (client) {
        return cb(null, client);
      } else {
        const newClient = new Client({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newClient.save(function(err) {
          if (err) return cb(err);
          return cb(null, newClient);
        });
      }
    });
  }
));

passport.serializeUser(function(client, done) {
  done(null, client.id);
})

passport.deserializeUser(function(id, done) {
  Client.findById(id, function(err, client){
      done(err, client);
  })
})

