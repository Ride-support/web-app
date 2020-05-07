import React from 'react';
import{
    GoogleMap,
    withGoogleMap,
    withScriptjs,
    Marker
}from 'react-google-maps';
import { useQuery } from '@apollo/react-hooks';
import queries from '../utils/queries';
import mapStyle from './MapsStyle'

function ShowCoordinates() {
    const { loading, error, data } = useQuery(queries.query.GET_ALL_COORDINATES);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.allCoordinates.map(position => (
        <Marker
            key = {position._id}
            position={{
                lat : position.latitude,
                lng : position.longitude
            }}
            icon={{
                url: 'https://cdn1.iconfinder.com/data/icons/cars-application-manager/512/car-map-marker-parking-4-512.png',
                scaledSize: new window.google.maps.Size(64,64)

            }}
        />
    ))
}

const Map = (props) =>{
    return(
        <GoogleMap
            defaultZoom = {13}
            defaultCenter = {{lat: 4.637072, lng: -74.085810}}
            defaultOptions={{styles : mapStyle}}
        >
            <ShowCoordinates/>
        </GoogleMap>
    );
};

export default withScriptjs(
    withGoogleMap(
        Map
    )
)