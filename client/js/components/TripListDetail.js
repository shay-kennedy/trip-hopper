import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchAndHandleUser, setActiveTrip } from '../redux/modules/user'


export class TripListDetail extends Component {
  constructor(props) {
    super(props)
    this.loadTrip = this.loadTrip.bind(this)
  }
  componentDidMount() {
    this.props.fetchUser()
  }
  loadTrip() {
    this.props.setActiveTrip(this.props.trip._id)
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


const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => { dispatch(fetchAndHandleUser()) },
    setActiveTrip: (tripId) => { dispatch(setActiveTrip(tripId)) },
  }
}

export default connect(null, mapDispatchToProps)(TripListDetail)
