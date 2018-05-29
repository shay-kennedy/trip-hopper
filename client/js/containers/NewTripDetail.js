import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Map } from '../components'
var actions = require('../redux/actions')


export class NewTripDetail extends Component {
  addTrip() {
    var tripName = prompt('Enter trip name')
    if (tripName == null) {
      return
    }
    this.props.dispatch(actions.addTrip(tripName, this.props, this.props.googleID))
  }
  render() {
    return (
      <div className="poi-entry">
        <div className="poi-detail-top">
          <div className="poi-img">
            <img src={this.props.poi.image_url} />
          </div>
          <div className="poi-name">
            <a href={this.props.poi.url} target="_blank">{this.props.poi.name}</a>
          </div>
          <div className="poi-location">
            <div>{this.props.poi.location.display_address[0]}</div>
            <div>{this.props.poi.location.display_address[1]}</div>
            <div>{this.props.poi.location.display_address[2]}</div>
          </div>
          <img src={this.props.poi.rating_img_url} />
          <div className="add-poi">
            <Link to="/planner/viewtrip"><input type="button" className="start-trip" onClick={this.addTrip} value="Start New Trip" /></Link>
          </div>
        </div>
        <div className="poi-detail-bottom">
          <Map lat={this.props.poi.location.coordinate.latitude} lng={this.props.poi.location.coordinate.longitude}/>
        </div>
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

export default connect(mapStateToProps)(NewTripDetail)
