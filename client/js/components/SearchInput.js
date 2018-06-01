import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAndHandlePois } from '../redux/modules/search'


export class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.submitSearch = this.submitSearch.bind(this)
  }
  submitSearch(event) {
    event.preventDefault()
    var searchText = this.refs.inputText.value
    var searchLocation = this.refs.inputLocation.value
    this.props.search(searchText, searchLocation)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <div>
            <input type="text" placeholder="Search for..." name="searchText" id="searchText" className="text input-text" autoComplete="off" required ref="inputText" />
            <input type="text" placeholder="In location..." name="searchLocation" id="searchLocation" className="text input-text" autoComplete="off" required ref="inputLocation" />
          </div>
          <div>
            <input type="submit" className="search-button" name="submit" value="Search"/>
          </div>
        </form>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    search: (searchText, location) => { dispatch(fetchAndHandlePois(searchText, location)) },
  }
}

export default connect(null, mapDispatchToProps)(SearchInput)
