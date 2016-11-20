var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');
import GoogleMap from './maps'


var TripDisplayDetail = React.createClass({
  
  componentDidMount: function() {
    this.props.dispatch(actions.fetchUser());
  },

  deletePoi: function(){
    this.props.dispatch(actions.removePoi(this.props.googleID, this.props.activeTrip, this.props.poi));
  },

  render: function(props){
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
          <GoogleMap lat={this.props.poi.coordinate.latitude} lng={this.props.poi.coordinate.longitude}/>
        </div>       
      </div>
    );
  }

});


var mapStateToProps = function(state, props) {
  return {
    googleID: state.googleID,
    trips: state.trips,
    activeTrip: state.activeTrip
  };
};

var Container = connect(mapStateToProps)(TripDisplayDetail);

module.exports = Container;