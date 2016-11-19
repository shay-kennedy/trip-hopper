var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var actions = require('./redux/actions');
var Link = require('react-router').Link;

var PlannerHeader = require('./plannerHeader');


function PlannerLanding () {
  return (
    <div>
      <div className="header">
        <a href="/logout" id="logout"><input type="button" value="Log Out" /></a>
        <Link to="/planner"><h1 id="title">Trip Hopper</h1></Link>
      </div>
      <p>Welcome to Trip Hopper! Your best app to build and save trips!</p>
      <p>What makes Trip Hopper fun is that as you add to your trip, it will be based on the location of your most recent place.</p>
      <p>This makes for a fun and easy way to build the perfect trip!</p>
      <p>If you want to view a previously saved trip, start here.</p>
      <div className="single-nav"> 
        <Link to="/planner/triplist"><div>Trips List</div></Link>
      </div>
      <p>If you want to build a new trip, start here.</p>
      <div className="single-nav"> 
        <Link to="/planner/newtrip"><div>New Trip</div></Link>
      </div>
    </div>
  )
};


module.exports = PlannerLanding;