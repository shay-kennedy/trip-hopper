var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');
var Link = require('react-router').Link;
import GoogleMap from './maps'


var SearchDetail = React.createClass({

  addPoi: function(){
    this.props.dispatch(actions.addPoi(this.props.activeTrip, this.props, this.props.googleID));
  },

  render: function(props){
    console.log('HERE', this.props.poi);
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

});


var mapStateToProps = function(state, props) {
  return {
    googleID: state.googleID,
    trips: state.trips,
    activeTrip: state.activeTrip
  };
};

var Container = connect(mapStateToProps)(SearchDetail);

module.exports = Container;