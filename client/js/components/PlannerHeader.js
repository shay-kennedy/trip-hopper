import React from 'react'
import { Link } from 'react-router'
import { logout } from '../redux/modules/user'


const PlannerHeader = () => {
  return (
    <div className="header">
      <a href="/logout" id="logout"><input type="button" value="Log Out" /></a>
      {/* <button onClick={() => logout()} className='input-button btn btn-warning'>Logout</button> */}
      <Link to="/planner"><h1 id="title">Trip Hopper</h1></Link>
    </div>
  )
}


export default PlannerHeader