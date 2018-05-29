import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
var actions = require('./redux/actions')


export class TripListDetail extends Component {
  constructor(props) {
    super(props)
    this.loadTrip = this.loadTrip.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(actions.fetchUser())
  }
  loadTrip() {
    this.props.dispatch(actions.setActiveTrip(this.props.trip._id))
    this.props.changeView()
  }
  render() {
    return (
      <div className="saved-trip">
        <Link to="/planner/viewtrip">
          <input
            type="button"
            className="save-load"
            name="load"
            value={this.props.trip.tripName}
            onClick={this.loadTrip}
          />
        </Link>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    googleID: state.googleID,
    trips: state.trips,
    activeTrip: state.activeTrip
  }
}

export default connect(mapStateToProps)(TripListDetail)
