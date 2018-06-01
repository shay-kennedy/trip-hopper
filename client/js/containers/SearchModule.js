import React, { Component } from 'react'
import { Link } from 'react-router'
import { PoiSearchInput, PlannerHeader } from '../components'
import { SearchResults } from '../containers'


const SearchModule = () => {
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


export default SearchModule