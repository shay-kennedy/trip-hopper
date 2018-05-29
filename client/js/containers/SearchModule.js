import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { PoiSearchInput, PlannerHeader } from '../components'
import { SearchResults } from '../containers'
var actions = require('../redux/actions')


export class SearchModule extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchUser())
  }
  render() {
    return (
      <div className="search-module">
        <PlannerHeader />
        <div className="double-nav">
          <Link to="/planner/triplist"><div>Trips List</div></Link>
          <Link to="/planner/newtrip"><div>New Trip</div></Link>
        </div>
        <h1>Add Hop Spot</h1>
        <PoiSearchInput />
        <SearchResults />
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    googleID: state.googleID,
    trips: state.trips,
    searchResults: state.searchResults
  }
}


export default connect(mapStateToProps)(SearchModule)
