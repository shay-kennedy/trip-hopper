import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { PlannerHeader } from '../components'
import { TripDisplayDetail } from '../containers'
import { removeTrip } from '../redux/modules/user'


export class TripDisplay extends Component {
  constructor(props) {
    super(props)
    this.deleteTrip = this.deleteTrip.bind(this)
  }
  deleteTrip() {
    this.props.removeTrip(this.props.activeTrip)
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


const mapStateToProps = ({user}) => {
  return {
    trip: user.trips.find((trip) => {
      if(user.activeTrip == trip._id) {
        return trip
      }
    }),
    activeTrip: user.activeTrip
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeTrip: (tripId) => { dispatch(removeTrip(tripId)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDisplay)
