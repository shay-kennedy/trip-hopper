import express from 'express'
import Yelp from 'yelp'
try {
  var config = require('../../config').config
} catch (e) { }


const router = express.Router()

var yelp = new Yelp({
  consumer_key: process.env.CONSUMER_KEY || config.yelp.consumer_key,
  consumer_secret: process.env.CONSUMER_SECRET || config.yelp.consumer_secret,
  token: process.env.TOKEN || config.yelp.token,
  token_secret: process.env.TOKEN_SECRET || config.yelp.token_secret
})

router.get('/:term',
  function (req, res) {
    const { term } = req.params
    const { location, cll } = req.query
    const query = {
      term,
      location,
      cll,
      sort: '1',
      limit: '3',
      radius_filter: '9000',
    }
    yelp.search(query)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  }
)

export default router
