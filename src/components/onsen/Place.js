import React, { useCalleback, useRef } from 'react';
import { GoogleMap, LoadScript } from 'react-google-maps';


const mapSize = {
    height: "50vh",
    width: "50%"
};

const NAGANO = {
    lat: 36.74745,
    lng: 138.36941
}

export default class Place extends React.Component {
    render() {
        return(
                <LoadScript googleMapsApiKey="process.env.REACT_APP_API_KEY">
                    <GoogleMap
                      mapStyle={mapSize}
                      center={NAGANO}
                      zoom={10}
                    >
    
                    </GoogleMap>
                </LoadScript>
        )
    }
}