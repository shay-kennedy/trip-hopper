import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchDetail } from '../containers'
var actions = require('../redux/actions')


export class SearchResults extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchUser())
  }
  render() {
    var searchResultsDetail = this.props.searchResults.map((poi) => {
      return <SearchDetail key={poi.id} poi={poi} />
    })
    return (
      <div>
        {searchResultsDetail}
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

export default connect(mapStateToProps)(SearchResults)
