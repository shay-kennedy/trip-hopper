import Cookies from 'js-cookie'
import {
  fetchUser,
  logoutUser,
  addUserTrip,
  removeUserTrip,
  addUserTripPoi,
  removeUserTripPoi,
  setActiveUserTrip,
} from '../../utils/api'

const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'


function fetchingUser() {
  return {
    type: FETCHING_USER,
  }
}

function fetchingUserSuccess(userData) {
  return {
    type: FETCHING_USER_SUCCESS,
    userData,
  }
}

function fetchingUserFailure(error) {
  return {
    type: FETCHING_USER_FAILURE,
    error,
  }
}

export function fetchAndHandleUser() {
  return function (dispatch) {
    dispatch(fetchingUser())
    fetchUser().then(res => {
      dispatch(fetchingUserSuccess(res.data))
    }).catch(error => {
      dispatch(fetchingUserFailure(error))
    })
  }
}

export function addTrip(tripName, poi) {
  return function (dispatch) {
    addUserTrip(tripName, poi).then(res => {
      dispatch(fetchingUserSuccess(res.data))
    }).catch(error => {
      dispatch(fetchingUserFailure(error))
    })
  }
}

export function removeTrip(tripId) {
  return function (dispatch) {
    removeUserTrip(tripId).then(res => {
      dispatch(fetchingUserSuccess(res.data))
    }).catch(error => {
      dispatch(fetchingUserFailure(error))
    })
  }
}

export function addPoi(tripId, poi) {
  return function (dispatch) {
    addUserTripPoi(tripId, poi).then(res => {
      dispatch(fetchingUserSuccess(res.data))
    }).catch(error => {
      dispatch(fetchingUserFailure(error))
    })
  }
}

export function removePoi(tripId, poiId) {
  return function (dispatch) {
    removeUserTripPoi(tripId, poiId).then(res => {
      dispatch(fetchingUserSuccess(res.data))
    }).catch(error => {
      dispatch(fetchingUserFailure(error))
    })
  }
}

export function setActiveTrip(tripId) {
  return function (dispatch) {
    setActiveUserTrip(tripId).then(res => {
      dispatch(fetchingUserSuccess(res.data))
    }).catch(error => {
      dispatch(fetchingUserFailure(error))
    })
  }
}

function logoutUserSuccess() {
  return {
    type: LOGOUT_USER_SUCCESS,
  }
}

function logoutUserFailure(error) {
  return {
    type: LOGOUT_USER_FAILURE,
    error,
  }
}

export function logout() {
  return function (dispatch) {
    logoutUser().then(res => {
      Cookies.remove('accessToken')
      window.location = "/"
      dispatch(logoutUserSuccess())
    }).catch(error => {
      dispatch(logoutUserFailure())
    })
  }
}

const initialState = {
  googleID: null,
  trips: [],
  activeTrip: null,
  isFetching: false,
  error: '',
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USER:
      return {
        ...state,
        isFetching: true,
      }
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        googleID: action.userData.googleID,
        trips: action.userData.trips,
        activeTrip: action.userData.activeTrip,
      }
    case FETCHING_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      }
    case LOGOUT_USER_SUCCESS:
      return initialState
    case LOGOUT_USER_FAILURE:
      return {
        ...initialState,
        error: action.error,
      }
    default:
      return state
  }
}