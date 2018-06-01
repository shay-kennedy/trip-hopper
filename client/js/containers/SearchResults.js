import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SearchDetail } from '../containers'
import { fetchAndHandleUser } from '../redux/modules/user'


export class SearchResults extends Component {
  componentDidMount() {
    this.props.fetchUser()
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


const mapStateToProps = ({search}) => {
  return {
    searchResults: search.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => { dispatch(fetchAndHandleUser()) },
  }
}

export default connect(mapStateToProps)(SearchResults)
