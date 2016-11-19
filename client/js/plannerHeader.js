var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');
var Link = require('react-router').Link;


function PlannerHeader () {
  return (
    <div className="header">
      <a href="/logout" id="logout"><input type="button" value="Log Out" /></a>
      <Link to="/planner"><h1 id="title">Trip Hopper</h1></Link>
      {/*<div className="double-nav">
        <Link to="/planner/triplist"><div>Trip List</div></Link>
        <Link to="/planner/newtrip"><div>New Trip</div></Link>
      </div>*/}
    </div>
  )
};


module.exports = PlannerHeader;