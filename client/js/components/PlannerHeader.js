import React from 'react'
import { Link } from 'react-router'


const PlannerHeader = (props) => {
  return (
    <div className="header">
      <Link to="/planner"><h1 id="title">Trip Hopper</h1></Link>
    </div>
  )
}


export default PlannerHeader