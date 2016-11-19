var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');
var TripListDetail = require('./tripListDetail');


var TripSaveLoad = React.createClass({
  
  getInitialState: function(event){
    return({
      viewMode: false})
  },

  toggleViewTrips: function(event){
    this.setState({
      viewMode: !this.state.viewMode
    });
  },

  loadTrip: function(event){
    this.setState({
      viewMode: false
    });
  },

  render: function(props){
    var savedTrips = this.props.trips.map((trip) => {
      return <TripListDetail key={trip.tripName} trip={trip} changeView={this.loadTrip} />
    });
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
  
});


var mapStateToProps = function(state, props) {
  return {
    googleID: state.googleID,
    trips: state.trips,
    searchResults: state.searchResults
  };
};

var Container = connect(mapStateToProps)(TripSaveLoad);

module.exports = Container;