import React, { Component } from 'react'
import { connect } from 'react-redux'
var actions = require('../redux/actions')


export class PoiSearchInput extends Component {
  constructor(props) {
    super(props)
    this.submitSearch = this.submitSearch.bind(this)
  }
  submitSearch(event) {
    event.preventDefault()
    const searchText = this.refs.inputText.value
    const lastPoi = this.props.trip.pois[this.props.trip.pois.length - 1]
    const searchLocation = lastPoi.location
    const cll = lastPoi.coordinate.latitude + ',' + lastPoi.coordinate.longitude
    this.props.dispatch(actions.poiSearch(searchText, searchLocation, cll))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <div>
            <input type="text" placeholder="Search for..." name="searchText" id="searchText" className="text input-text" autoComplete="off" required ref="inputText" />
          </div>
          <div>
            <input type="submit" id="inputButton" className="button btn btn-primary search-button" name="submit" value="Search" />
          </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    googleID: state.googleID,
    trips: state.trips,
    searchResults: state.searchResults,
    trip: state.trips.find((trip) => {
      if(state.activeTrip == trip._id) {
        return trip
      }
    })
  }
}

export default connect(mapStateToProps)(PoiSearchInput)
