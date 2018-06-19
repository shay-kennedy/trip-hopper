import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logout } from '../redux/modules/user'


const PlannerHeader = (props) => {
  return (
    <div className="header">
      <button onClick={() => props.logoutUser()} className='input-button btn btn-warning logout'>Logout</button>
      <Link to="/planner"><h1 id="title">Trip Hopper</h1></Link>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => { dispatch(logout()) }
  }
}


export default connect(null, mapDispatchToProps)(PlannerHeader)