import React, { Component } from 'react'
import { NewTripDetail } from '../containers'


export class newTripResults extends Component {
  render() {
    const newTripResultsDetail = this.props.results.map((poi) => {
      return <NewTripDetail key={poi.id} poi={poi} />
    })
    return (
      <div>
        {newTripResultsDetail}
      </div>
    )
  }
}

export default newTripResults
