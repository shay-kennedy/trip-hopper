import express from 'express'
import passport from '../middleware/passport-google-strategy'


const router = express.Router()

router.get('/google',
  passport.authenticate(
    'google',
    {
      scope: ['profile'],
      prompt: 'select_account'
    }
  )
)

router.get('/google/callback',
  passport.authenticate(
    'google',
    {
      failureRedirect: '/',
      session: false
    }
  ),
  function (req, res) {
    res.cookie('accessToken', req.user.accessToken, { expires: 0 })
    res.redirect('/#/planner')
  }
)

export default router
