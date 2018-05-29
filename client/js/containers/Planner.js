import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PlannerLanding } from '../components'
import { SearchModule, TripModule } from './containers'
var actions = require('./redux/actions')


export class Planner extends Component {
  componentDidMount() {
  	this.props.dispatch(actions.fetchUser())
  }
  render() {
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


const mapStateToProps = (state, props) => {
    return {
      googleID: state.googleID,
      trips: state.trips,
      searchResults: state.searchResults
    }
}

export default connect(mapStateToProps)(Planner)
