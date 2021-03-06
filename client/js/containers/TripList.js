import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { TripListDetail, PlannerHeader } from '../components'


export class TripList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewMode: false
    }
    this.toggleViewTrips = this.toggleViewTrips.bind(this)
    this.loadTrip = this.loadTrip.bind(this)
  }
  toggleViewTrips() {
    this.setState({
      viewMode: !this.state.viewMode
    })
  }
  loadTrip() {
    this.setState({
      viewMode: false
    })
  }
  render() {
    var savedTrips = this.props.trips.map((trip) => {
      return <TripListDetail key={trip.tripName} trip={trip} changeView={this.loadTrip} />
    })
    return (
      <div className="saved-display">
        <PlannerHeader />
        <div className="single-nav">
          <Link to="/planner/newtrip"><div>New Trip</div></Link>
        </div>
        <h1>Saved Trips</h1>
        {savedTrips}
      </div>
    )
  }
}


const mapStateToProps = ({user}) => {
  return {
    trips: user.trips,
  }
}

export default connect(mapStateToProps)(TripList)
