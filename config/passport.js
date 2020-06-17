const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {
    Client.findOne({ 'googleId': profile.id }, function(err, client) {
        if (err) return cb(err);
        if (client) {
          return cb(null, client);
        } else {
          // we have a new student via OAuth!
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