import express from 'express'
import passport from '../middleware/bearer-passport'
import { User } from '../models'


const router = express.Router()

router.get('/logout',
  function (req, res) {
    req.logout()
    res.redirect('/')
  }
)

router.get('/',
  passport.authenticate('bearer', { session: false }),
  function (req, res) {
    const googleID = req.user.googleID
    User.findOne({ googleID: googleID })
      .catch(err => res.send(err))
      .then(user => res.json(user))
  }
)

router.put('trips',
  passport.authenticate('bearer', { session: false }),
  function (req, res) {
    User.findOneAndUpdate(
      { 'googleID': req.user.googleID },
      {
        $push: { 'trips': req.body },
        $set: { 'activeTrip': req.body._id }
      },
      { new: true })
      .catch(err => res.send(err))
      .then(user => res.json(user))
  }
)

router.delete('/trips',
  passport.authenticate('bearer', { session: false }),
  function (req, res) {
    User.findOneAndUpdate(
      { 'googleID': req.user.googleID },
      {
        $pull: { 'trips': { '_id': req.body._id } },
        $set: { 'activeTrip': null }
      },
      { new: true })
      .catch(err => res.send(err))
      .then(user => res.json(user))
  }
)

router.put('/poi/:_id',
  passport.authenticate('bearer', { session: false }),
  function (req, res) {
    User.findOneAndUpdate(
      {
        'googleID': req.user.googleID,
        'trips._id': req.params._id
      },
      { $push: { 'trips.$.pois': req.body } },
      { new: true })
      .catch(err => res.send(err))
      .then(user => res.json(user))
  }
)

router.delete('/poi/:_id',
  passport.authenticate('bearer', { session: false }),
  function (req, res) {
    User.findOneAndUpdate(
      {
        'googleID': req.user.googleID,
        'trips._id': req.params._id
      },
      { $pull: { 'trips.$.pois': { 'id': req.body.id } } },
      { new: true })
      .catch(err => res.send(err))
      .then(user => res.json(user))
  }
)

app.put('/active_trip/:_id',
  passport.authenticate('bearer', { session: false }),
  function (req, res) {
    User.findOneAndUpdate(
      { 'googleID': req.user.googleID },
      { $set: { 'activeTrip': req.params._id } },
      { new: true })
      .catch(err => res.send(err))
      .then(user => res.json(user))
  }
)

export default router