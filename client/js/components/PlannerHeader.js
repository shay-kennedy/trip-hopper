import React from 'react'
import { Link } from 'react-router'


const PlannerHeader = () => {
  return (
    <div className="header">
      <a href="/logout" id="logout"><input type="button" value="Log Out" /></a>
      <Link to="/planner"><h1 id="title">Trip Hopper</h1></Link>
    </div>
  )
}


export default PlannerHeader