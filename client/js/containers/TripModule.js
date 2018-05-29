import React from 'react'
import { TripDisplay, TripSaveLoad } from './containers'


const TripModule = () => {
  return (
    <div className="trip-module">
      <TripDisplay />
      <TripSaveLoad />
    </div>
  )
}

export default TripModule
