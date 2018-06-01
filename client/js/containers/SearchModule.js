import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { PoiSearchInput, PlannerHeader } from '../components'
import { SearchResults } from '../containers'
import { fetchAndHandleUser } from '../redux/modules/user'


class SearchModule extends Component {
  componentDidMount() {
    this.props.fetchUser()
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


const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => { dispatch(fetchAndHandleUser()) },
  }
}

export default connect(null, mapDispatchToProps)(SearchModule)