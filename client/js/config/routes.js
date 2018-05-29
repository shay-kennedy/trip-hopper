import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Landing, PlannerLanding } from '../components'
import {
  Main,
  Planner,
  TripList,
  TripDisplay,
  NewTripModule,
  SearchModule
} from '../containers'


const getRoutes = (history) => {
  return (
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Landing} />
        <Route path="/planner" component={Planner}>
          <IndexRoute component={PlannerLanding} />
          <Route path="/planner/triplist" component={TripList} />
          <Route path="/planner/viewtrip" component={TripDisplay} />
          <Route path="/planner/newtrip" component={NewTripModule} />
          <Route path="/planner/addpoi" component={SearchModule} />
        </Route>
      </Route>
    </Router>
  )
}

export default getRoutes
