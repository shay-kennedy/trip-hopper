import { poiSearch } from '../../utils/api'

const FETCHING_POIS = 'FETCHING_POIS'
const FETCHING_POIS_SUCCESS = 'FETCHING_POIS_SUCCESS'
const FETCHING_POIS_FAILURE = 'FETCHING_POIS_FAILURE'


function fetchingPois() {
  return {
    type: FETCHING_POIS,
  }
}

function fetchingPoisSuccess(searchResults) {
  return {
    type: FETCHING_POIS_SUCCESS,
    searchResults,
  }
}

function fetchingPoisFailure(error) {
  return {
    type: FETCHING_POIS_FAILURE,
    error,
  }
}

export function fetchAndHandlePois(searchTerm, location, cll) {
  return function (dispatch) {
    dispatch(fetchingPois())
    poiSearch(searchTerm, location, cll).then(res => {
      dispatch(fetchingPoisSuccess(res.data.businesses))
    }).catch(error => {
      dispatch(fetchingPoisFailure(error))
    })
  }
}

const initialState = {
  searchResults: [],
  isFetching: false,
  error: '',
}

export default function search(state = initialState, action) {
  switch (action.type) {
    case FETCHING_POIS:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_POIS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        searchResults: action.searchResults,
      }
    case FETCHING_POIS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    default:
      return state
  }
}