import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PlannerLanding } from '../components'
import { SearchModule, TripModule } from '../containers'
var actions = require('../redux/actions')


export class Planner extends Component {
  componentDidMount() {
  	this.props.fetchUser()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
        <div className="yelp-credit footer">
          <p>POWERED BY</p>
          <a href="http://www.yelp.com" target="_blank"><img src="./assets/yelp-2c.png" /></a>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => { dispatch(actions.fetchUser()) },
  }
}

export default connect(null, mapDispatchToProps)(Planner)