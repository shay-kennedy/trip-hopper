import React from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'


 const Map = (props) => {
  return(
    <div className="map-display">
      <GoogleMapLoader
        containerElement={ <div style={{height: '200px'}} /> }
        googleMapElement={
          <GoogleMap defaultZoom={16} defaultCenter={{lat: props.lat, lng: props.lng}} >
            <Marker position={{lat: props.lat, lng: props.lng}}/>
          </GoogleMap>
        }
      />
    </div>
  )
}

export default Map