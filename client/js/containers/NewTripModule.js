import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SearchInput, PlannerHeader } from '../components'
import { NewTripResults } from '../containers'
import { fetchAndHandleUser } from '../redux/modules/user'


export class NewTripModule extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <div className="search-module">
        <PlannerHeader />
        <div className="single-nav">
          <Link to="/planner/triplist"><div>Trips List</div></Link>
        </div>
        <h1>Start New Trip</h1>
        <SearchInput />
        <NewTripResults />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => { dispatch(fetchAndHandleUser()) },
  }
}

export default connect(null, mapDispatchToProps)(NewTripModule)