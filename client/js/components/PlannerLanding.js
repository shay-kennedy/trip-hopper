import React from 'react'
import { Link } from 'react-router'
import { logout } from '../redux/modules/user'


const PlannerLanding = () => {
  return (
    <div id="planner-landing-container">
      <div className="header">
        <a href="/logout" id="logout"><input type="button" value="Log Out" /></a>
        {/* <button onClick={() => logout()} className='input-button btn btn-warning'>Logout</button> */}
        <Link to="/planner"><h1 id="title">Trip Hopper</h1></Link>
      </div>
      <div id="planner-landing-main">
        <div id="planner-landing-text">
          <p>Your app to plan fun and easy trips!</p>
          <p>Trip Hopper uses your previous location as you search and add to your trip, so you can easily hop from place to place.</p>
        </div>
        <div id="planner-landing-links" className="double-nav">
          <Link to="/planner/triplist"><div>View Trip</div></Link>
          <Link to="/planner/newtrip"><div>Start Trip</div></Link>
        </div>
      </div>
    </div>
  )
}

export default PlannerLanding