import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map } from '../components'
var actions = require('../redux/actions')


export class TripDisplayDetail extends Component {
  constructor(props) {
    super(props)
    this.deletePoi = this.deletePoi.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(actions.fetchUser())
  }
  deletePoi() {
    this.props.dispatch(actions.removePoi(this.props.googleID, this.props.activeTrip, this.props.poi))
  }
  render() {
    return (
      <div className="trip-poi poi-entry">
        <div className="poi-detail-top">
          <div className="poi-img">
            <img src={this.props.poi.image_url} />
          </div>
          <div className="poi-name">
            <a href={this.props.poi.url} target="_blank">{this.props.poi.name}</a>
          </div>
          <div className="poi-location">
            <div>{this.props.poi.location[0]}</div>
            <div>{this.props.poi.location[1]}</div>
            <div>{this.props.poi.location[2]}</div>
          </div>
          <img src={this.props.poi.rating_img_url} />
          <div className="poi-remove">
            <input type="button" onClick={this.deletePoi} className="delete-poi" value="Remove" />
          </div>
        </div>
        <div className="poi-detail-bottom">
          <Map lat={this.props.poi.coordinate.latitude} lng={this.props.poi.coordinate.longitude}/>
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

export default connect(mapStateToProps)(TripDisplayDetail)
