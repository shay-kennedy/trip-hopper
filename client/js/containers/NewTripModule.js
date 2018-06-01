import React from 'react'
import { Link } from 'react-router'
import { SearchInput, PlannerHeader } from '../components'
import { NewTripResults } from '../containers'


const NewTripModule = () => {
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


export default NewTripModule