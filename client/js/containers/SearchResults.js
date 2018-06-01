import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchDetail } from '../containers'


export class SearchResults extends Component {
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


const mapStateToProps = ({search}) => {
  return {
    searchResults: search.searchResults
  }
}


export default connect(mapStateToProps)(SearchResults)
