import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAndHandleUser, logout } from '../redux/modules/user'
import Cookies from 'js-cookie'


export class Planner extends Component {
  componentDidMount() {
  	this.props.fetchUser()
  }
  render() {
    const token = Cookies.get('accessToken')
    return (
      <div>
        <div className="container">
          {this.props.children}
          {token && <button
            onClick={() => this.props.logoutUser()}
            className='input-button btn btn-warning logout'
          >
            Logout
          </button>}
        </div>
        <div className="yelp-credit footer">
          <p>POWERED BY</p>
          <a href="http://www.yelp.com" target="_blank"><img src="./assets/yelp-2c.png" /></a>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => { dispatch(fetchAndHandleUser()) },
    logoutUser: () => { dispatch(logout()) }
  }
}

export default connect(null, mapDispatchToProps)(Planner)