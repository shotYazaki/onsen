import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyle= {
    height: "50vh",
    width: "50%"
};

const NAGANO = {
    lat: 36.74745,
    lng: 138.36941
};

const Place = () => {
    return(
        <LoadScript key="GoogleMapAPIKey">
            <GoogleMap
              mapContainerStyle={mapStyle}
              center={NAGANO}
              zoom={12}
            >

            </GoogleMap>
        </LoadScript>
    );
};

export default Place;