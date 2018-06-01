import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NewTripDetail } from '../containers'


export class newTripResults extends Component {
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


const mapStateToProps = ({reducer}) => {
  return {
    searchResults: reducer.searchResults
  }
}

export default connect(mapStateToProps)(newTripResults)
