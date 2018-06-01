import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAndHandlePois } from '../redux/modules/search'


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
    this.props.search(searchText, searchLocation, cll)
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


const mapStateToProps = ({search, user}) => {
  return {
    searchResults: search.searchResults,
    trip: user.trips.find((trip) => {
      if(user.activeTrip == trip._id) {
        return trip
      }
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    search: (searchText, location, cll) => { dispatch(fetchAndHandlePois(searchText, location, cll)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PoiSearchInput)
