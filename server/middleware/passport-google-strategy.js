import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { User } from '../models'
try {
  var config = require('../../config').config
} catch (e) { }


passport.use(new GoogleStrategy(
  {
    clientID: process.env.CLIENTID || config.googleAuth.clientID,
    clientSecret: process.env.CLIENTSECRET || config.googleAuth.clientSecret,
    callbackURL: process.env.CALLBACKURL || config.googleAuth.callbackURL,
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ googleID: profile.id })
      .catch(err => done(err))
      .then(user => {
        if (!user) {
          User.create(
            {
              googleID: profile.id,
              accessToken: accessToken,
              trips: [],
              activeTrip: null
            })
            .catch(err => done(err))
            .then(newUser => done(null, newUser))
        } else {
          return done(null, user)
        }
      })
  }
))

export default passport