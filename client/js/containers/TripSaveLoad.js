import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TripListDetail } from '../components'


export class TripSaveLoad extends Component {
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
      <div>
        <div className="saved-trips-button">
          <input onClick={this.toggleViewTrips} type="button" name="load" value="View Saved Trips/Load" className="save-load" />
        </div>
        {this.state.viewMode && <div className="saved-display">
          {savedTrips}
        </div>}
      </div>
    )
  }
}


const mapStateToProps = ({user}) => {
  return {
    trips: user.trips,
  }
}

export default connect(mapStateToProps)(TripSaveLoad)
