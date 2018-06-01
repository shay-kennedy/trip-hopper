import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Map } from '../components'
import { addPoi } from '../redux/modules/user'


export class SearchDetail extends Component {
  constructor(props) {
    super(props)
    this.addPoi = this.addPoi.bind(this)
  }
  addPoi() {
    this.props.addPoi(this.props.activeTrip, this.props)
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
          <Map lat={this.props.poi.location.coordinate.latitude} lng={this.props.poi.location.coordinate.longitude}/>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({reducer}) => {
  return {
    googleID: reducer.googleID,
    activeTrip: reducer.activeTrip
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPoi: () => { dispatch(addPoi()) },
  }
}

export default connect(mapStateToProps)(SearchDetail)