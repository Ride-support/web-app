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
import gql from "graphql-tag";
import {func} from "prop-types";
import Popup from "semantic-ui-react/dist/commonjs/modules/Popup";
import Button from "react-bootstrap/Button";

const ALL_SERVICES = gql`
    {
        allServicesM{
            Service

        }
    }
`;

function GetServices() {

    const { loading, error, data } = useQuery(ALL_SERVICES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const all_services = data.allServicesM.map( item => {
        return { value: item.Service };
    });

    var array_all_services = [];
    for(var i = 0; i < all_services.length; i++){
        var vehicle_type_of_this_service = all_services[i].value.split(" ")[2];
        if(vehicle_type_of_this_service==localStorage.getItem("vehicle_type")){
            var service = all_services[i].value.split(" ")[0];
            array_all_services.push(service);
        }
    }
    return array_all_services
}

function ShowCoordinates() {

    const dataServices = GetServices()

    const { loading, error, data } = useQuery(queries.query.GET_ALL_COORDINATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    var counter = 0
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