import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { SearchInput, PlannerHeader } from '../components'
import { NewTripResults } from '../containers'


const NewTripModule = (props) => {
  return (
    <div className="search-module">
      <PlannerHeader />
      <div className="single-nav">
        <Link to="/planner/triplist"><div>Trips List</div></Link>
      </div>
      <h1>Start New Trip</h1>
      <SearchInput />
      {props.searchResults.length > 0 && <NewTripResults results={props.searchResults} />}
    </div>
  )
}

const mapStateToProps = ({ search }) => {
  return {
    searchResults: search.searchResults
  }
}

export default connect(mapStateToProps)(NewTripModule)