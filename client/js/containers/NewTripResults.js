import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NewTripDetail } from '../containers'
var actions = require('../redux/actions')


export class newTripResults extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchUser())
  }
  render() {
    const newTripResultsDetail = this.props.searchResults.map((poi) => {
      return <NewTripDetail key={poi.id} poi={poi} />
    })
    return (
      <div>
        {newTripResultsDetail}
      </div>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    googleID: state.googleID,
    trips: state.trips,
    searchResults: state.searchResults
  }
}

export default connect(mapStateToProps)(newTripResults)
