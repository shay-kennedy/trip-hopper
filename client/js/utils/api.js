import * as axios from 'axios'
import Cookies from 'js-cookie'
import ObjectID from "bson-objectid"


const api = () => {
  const apiClient = axios.create({
    baseURL: window.location.origin
  })
  const authtoken = Cookies.get('accessToken') || ''
  apiClient.defaults.headers.common['Authorization'] = `bearer ${authtoken}`
  apiClient.interceptors.response.use(response => {
    return Promise.resolve(response)
  }, error => {
    if (error.response.status === 401) {
      Cookies.remove('accessToken')
      window.location = "/"
    }
    return Promise.reject(error)
  })
  return apiClient
}

export const fetchUser = () => {
  const url = '/user'
  return api().get(url)
}

export const logoutUser = () => {
  const url = '/user/logout'
  return api().get(url)
}

export const poiSearch = (searchTerm, location, cll) => {
  let url = "/yelp/"
  if (location) {
    url = url + `${searchTerm}?location=${location}`
  } else if (cll) {
    url = url + `${searchTerm}?cll=${cll}`
  }
  return api().get(url)
}

export const addUserTrip = (tripName, poi) => {
  const {
    name, location, id, url, image_url, rating, review_count,
    rating_img_url, rating_img_url_small, display_phone, categories
  } = poi.poi
  const data = {
    tripName,
    _id: ObjectID(),
    pois: [{
      name,
      location: location.display_address,
      coordinate: location.coordinate,
      id,
      url,
      image_url,
      rating,
      review_count,
      rating_img_url,
      rating_img_url_small,
      display_phone,
      categories,
    }]
  }
  return api().put('/user/trips', data)
}

export const removeUserTrip = (tripId) => {
  return api().delete(`/user/trips/${tripId}`)
}

export const addUserTripPoi = (tripId, poi) => {
  const {
    name, location, id, url, image_url, rating, review_count,
    rating_img_url, rating_img_url_small, display_phone, categories
  } = poi.poi
  const data = {
    name,
    location: location.display_address,
    coordinate: location.coordinate,
    id,
    url,
    image_url,
    rating,
    review_count,
    rating_img_url,
    rating_img_url_small,
    display_phone,
    categories,
  }
  return api().put(`/user/poi/${tripId}`, data)
}

export const removeUserTripPoi = (tripId, poiId) => {
  return api().delete(`/user/poi/${tripId}/${poiId}`)
}

export const setActiveUserTrip = (tripId) => {
  return api().put(`/user/active/${tripId}`)
}