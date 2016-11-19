var React = require('react');
var ReactDOM = require('react-dom');
var connect = require('react-redux').connect;
var store = require('./redux/store');
var Provider = require('react-redux').Provider;
var actions = require('./redux/actions');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var IndexRoute = router.IndexRoute;
var hashHistory = router.hashHistory;
var Link = router.Link;

var Landing = require('./landing');
var Planner = require('./planner');
var PlannerLanding = require('./plannerLanding')

var TripList = require('./tripList');
var ViewTrip = require('./tripDisplay');
var NewTrip = require('./newTripModule');
var AddPoi = require('./searchModule');


var App = function(props) {
    return (
        <div>
          {props.children}
        </div>
    );
};

var routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Landing} />
        <Route path="/planner" component={Planner}>
          <IndexRoute component={PlannerLanding} />
          <Route path="/planner/triplist" component={TripList} />
          <Route path="/planner/viewtrip" component={ViewTrip} />
          <Route path="/planner/newtrip" component={NewTrip} />
          <Route path="/planner/addpoi" component={AddPoi} />
        </Route>
      </Route>
    </Router>
  </Provider>
);


document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
    		routes,
    	document.getElementById('app'));
});

console.log(`Client running in ${process.env.NODE_ENV} mode`);
