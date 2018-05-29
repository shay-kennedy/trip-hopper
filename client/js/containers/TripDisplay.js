import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { PlannerHeader } from '../components'
import { TripDisplayDetail } from '../containers'
var actions = require('../redux/actions')


export class TripDisplay extends Component {
  constructor(props) {
    super(props)
    this.deleteTrip = this.deleteTrip.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(actions.fetchUser())
  }
  deleteTrip() {
    this.props.dispatch(actions.removeTrip(this.props.googleID, this.props.activeTrip))
  }
  render() {
    if (this.props.activeTrip == null) {
      return (
        <div>
          <p>Enter a trip</p>
        </div>
      )
    }
    var tripPoiList = this.props.trip.pois.map((poidata) => {
      return (<TripDisplayDetail key={poidata.id} poi={poidata} />)
    })
    return (
      <div className="trip-display">
        <PlannerHeader />
        <div className="double-nav">
          <Link to="/planner/triplist"><div>Trips List</div></Link>
          <Link to="/planner/newtrip"><div>New Trip</div></Link>
        </div>
        <div className="trip-display-header">
          <h1>{this.props.trip.tripName}</h1>
          <Link to="/planner/addpoi"><input className="add-to-trip" type="button" value="Add to Trip" /></Link>
          <Link to="/planner/triplist"><input className="delete-trip" onClick={this.deleteTrip} type="button" name="rename" value="Delete Trip" /></Link>
        </div>
        <div className="trip-module">
          {tripPoiList}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    googleID: state.googleID,
    trip: state.trips.find((trip) => {
      if(state.activeTrip == trip._id) {
        return trip
      }
    }),
    searchResults: state.searchResults,
    activeTrip: state.activeTrip
  }
}

export default connect(mapStateToProps)(TripDisplay)
