import React from 'react';
import{
    GoogleMap,
    withGoogleMap,
    withScriptjs
}from 'react-google-maps';

const Map = (props) =>{
    return(
        <GoogleMap
            defaultZoom = {13}
            defaultCenter = {{lat: 4.637072, lng: -74.085810}}
        />
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)