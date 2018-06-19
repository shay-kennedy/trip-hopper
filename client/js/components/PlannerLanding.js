import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logout } from '../redux/modules/user'


const PlannerLanding = (props) => {
  return (
    <div id="planner-landing-container">
      <div className="header">
        <button onClick={() => props.logoutUser()} className='input-button btn btn-warning logout'>Logout</button>
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


const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => { dispatch(logout()) }
  }
}

export default connect(null, mapDispatchToProps)(PlannerLanding)