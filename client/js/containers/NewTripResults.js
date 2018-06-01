import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NewTripDetail } from '../containers'
import { fetchAndHandleUser } from '../redux/modules/user'


export class newTripResults extends Component {
  componentDidMount() {
    this.props.fetchUser()
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


const mapStateToProps = ({reducer}) => {
  return {
    searchResults: reducer.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => { dispatch(fetchAndHandleUser()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(newTripResults)
