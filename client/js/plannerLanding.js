var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');
var Link = require('react-router').Link;


function PlannerLanding () {
  return (
    <div id="planner-landing-container">
      <div className="header">
        <a href="/logout" id="logout"><input type="button" value="Log Out" /></a>
        <Link to="/planner"><h1 id="title">Trip Hopper</h1></Link>
      </div>
      <div id="planner-landing-main">
        <div id="planner-landing-text">
          <p>Your app to plan fun and easy trips!</p>
          <p>Trip Hopper uses your previous location as you search and add to your trip, so you can easily hop from place to place.</p>
        </div>
        <div id="planner-landing-links" className="double-nav">
          <Link to="/planner/triplist"><div>View Trips</div></Link>
          <Link to="/planner/newtrip"><div>Start Trip</div></Link>
        </div>
      </div>
    </div>
  )
};


module.exports = PlannerLanding;