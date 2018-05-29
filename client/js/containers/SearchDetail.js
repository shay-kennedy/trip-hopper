import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { GoogleMap } from '../components'
var actions = require('./redux/actions')


export class SearchDetail extends Component {
  constructor(props) {
    super(props)
    this.addPoi = this.addPoi.bind(this)
  }
  addPoi() {
    this.props.dispatch(actions.addPoi(this.props.activeTrip, this.props, this.props.googleID))
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
          <div>
            <Link to="/planner/viewtrip"><input type="button" className="add-poi" onClick={this.addPoi} value="Add To Existing Trip" /></Link>
          </div>
        </div>
        <div className="poi-detail-bottom">
          <GoogleMap lat={this.props.poi.location.coordinate.latitude} lng={this.props.poi.location.coordinate.longitude}/>
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

export default connect(mapStateToProps)(SearchDetail)