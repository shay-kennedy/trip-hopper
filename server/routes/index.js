import express from 'express'
import auth from './auth'
import user from './user'
import yelp from './yelp'


const router = express.Router()

router.use('/auth', auth)
router.use('/user', user)
router.use('/yelp', yelp)

export default router
