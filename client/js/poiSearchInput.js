var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');


var PoiSearchInput = React.createClass({

  submitSearch: function(event){
    event.preventDefault();
    var searchText = this.refs.inputText.value;
    var lastPoi = this.props.trip.pois[this.props.trip.pois.length - 1];
    var searchLocation = lastPoi.location;
    var cll = lastPoi.coordinate.latitude + ',' + lastPoi.coordinate.longitude;
    this.props.dispatch(actions.poiSearch(searchText, searchLocation, cll));
  },

  render: function(props){
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <div>
            <input type="text" placeholder="Search for..." name="searchText" id="searchText" className="text input-text" autoComplete="off" required ref="inputText" />
          </div>
          <div>
            <input type="submit" id="inputButton" className="button btn btn-primary search-button" name="submit" value="Search"/>
          </div>
        </form>
      </div>
    )
  }

});


var mapStateToProps = function(state, props) {
  return {
    googleID: state.googleID,
    trips: state.trips,
    searchResults: state.searchResults,
    trip: state.trips.find((trip) => {
      if(state.activeTrip == trip._id) {
        return trip
      }
    })
  };
};

var Container = connect(mapStateToProps)(PoiSearchInput);

module.exports = Container;