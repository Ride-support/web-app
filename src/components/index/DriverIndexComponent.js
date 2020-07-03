import React ,{Component} from 'react';
import Map from "../Map/Map";
import credential from "../../credentials";
import Card from "react-bootstrap/Card";
import {func} from "prop-types";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";
import gql from "graphql-tag";
import {useQuery} from "@apollo/react-hooks";
import { FaParking } from 'react-icons/fa';
import Button from "react-bootstrap/Button";
import CardHeader from "reactstrap/es/CardHeader";
import ShowServicesComponent from "../services/showServices";
import {MDBContainer} from "mdbreact";

const mapURL = `https://maps.googleapis.com/maps/api/js?v_3.exp&key=${credential.mapsKey}`;

const styles={
    component: {
        backgroundImage: "url(" + "images/HomeBackground.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        height: "63em"

    },
    vehicleCard:{
        height: "15em"
    },
    serviceCard:{
        height: "17em"
    },
    listCard:{
        height: "20em"
    },
    inline:{
        display: "inline-block"
    },
    button:{
        backgroundColor: "transparent",
        borderStyle: "none"
    },
    scroll:{
        overflow: "scroll",
        maxWidth: "20px",
        maxHeight: "20px"
    }
}

const ALL_SERVICES = gql`
    {
        allServicesM{
            Service

        }
    }
`;

export default ()=>{


    const showVehicle = ()=>{
        const vehicle_type = localStorage.getItem("vehicle_type");
        if(vehicle_type=="moto"){
            return(
                <div>
                    <div style={styles.inline} className="col-md-4 ">
                        <div className="row">
                            <Icon name="motorcycle"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="check circle"  className="ml-1 text-dark " size="big" color="green"/>
                        </div>
                    </div>
                    <div style={styles.inline} className="col-md-4">
                        <div className="row">
                            <Icon name="car"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="remove circle"  className="ml-1 text-dark " size="big" color="red"/>
                        </div>
                    </div>
                    <div style={styles.inline} className="col-md-4">
                        <div className="row">
                            <Icon name="bicycle"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="remove circle"  className="ml-1 text-dark " size="big" color="red"/>
                        </div>
                    </div>

                </div>
            );
        }else if(vehicle_type=="carro"){
            return(
                <div>
                    <div style={styles.inline} className="col-md-4 ">
                        <div className="row">
                            <Icon name="motorcycle"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="remove circle"  className="ml-1 text-dark " size="big" color="red"/>
                        </div>
                    </div>
                    <div style={styles.inline} className="col-md-4">
                        <div className="row">
                            <Icon name="car"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="check circle"  className="ml-1 text-dark " size="big" color="green"/>
                        </div>
                    </div>
                    <div style={styles.inline} className="col-md-4">
                        <div className="row">
                            <Icon name="bicycle"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="remove circle"  className="ml-1 text-dark " size="big" color="red"/>
                        </div>
                    </div>

                </div>
            );
        }else if(vehicle_type=="bicicleta"){
            return(
                <div>
                    <div style={styles.inline} className="col-md-4 ">
                        <div className="row">
                            <Icon name="motorcycle"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="remove circle"  className="ml-1 text-dark " size="big" color="red"/>
                        </div>
                    </div>
                    <div style={styles.inline} className="col-md-4">
                        <div className="row">
                            <Icon name="car"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="remove circle"  className="ml-1 text-dark " size="big" color="red"/>
                        </div>
                    </div>
                    <div style={styles.inline} className="col-md-4">
                        <div className="row">
                            <Icon name="bicycle"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="check circle"  className="ml-1 text-dark " size="big" color="green"/>
                        </div>
                    </div>

                </div>
            );
        }else{
            return(
                <div>
                    <div style={styles.inline} className="col-md-12 ">
                        <div className="row">
                            <Icon name="user secret"  className="ml-1 text-dark " size="massive"/>
                        </div>
                        <div className="row justify-content-center">
                            <Icon name="check circle"  className="ml-1 text-dark " size="big" color="green"/>
                        </div>
                    </div>

                </div>
            );
        }
    }
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

    var not_repeated_all_services = [... new Set(array_all_services)];

    const Parking =() =>{
        if(not_repeated_all_services.indexOf("Parqueadero")>=0){
            return (
                <div className="row justify-content-center">
                    <Icon name="check circle"  className="ml-1 text-dark " size="big" color="green"/>
                </div>
            );
        }else{
            return (
                <div className="row justify-content-center">
                    <Icon name="remove circle"  className="ml-1 text-dark " size="big" color="red"/>
                </div>
            );
        }
    }

    const CarShop = () =>{
        if(not_repeated_all_services.indexOf("Taller")>=0){
            return (
                <div className="row justify-content-center">
                    <Icon name="check circle"  className="ml-1 text-dark " size="big" color="green"/>
                </div>
            );
        }else{
            return (
                <div className="row justify-content-center">
                    <Icon name="remove circle"  className="ml-1 text-dark " size="big" color="red"/>
                </div>
            );
        }
    }

    const CarWash = () =>{
        if(not_repeated_all_services.indexOf("Lavadero")>=0){
            return (
                <div className="row justify-content-center">
                    <Icon name="check circle"  className="ml-1 text-dark " size="big" color="green" />

                </div>
            );
        }else{
            return (
                <div className="row justify-content-center">
                    <Icon name="remove circle"  className="ml-1 text-dark " size="big" color="red"/>
                </div>
            );
        }
    }

    console.log(not_repeated_all_services);

    const showServices = ()=>{
        return(
            <div>
                <div style={styles.inline} className="col-md-4 ">
                    <div className="row">
                        <FaParking size="9em" />
                    </div>
                    <Parking/>
                </div>
                <div style={styles.inline} className="col-md-4">
                    <div className="row mb-2">
                        <Icon name="wrench"  className="ml-1 text-dark " size="massive"/>
                    </div>
                    <CarShop/>
                </div>
                <div style={styles.inline} className="col-md-4">
                    <div className="row mb-2">
                        <Icon name="tint"  className="ml-1 text-dark " size="massive"/>
                    </div>
                    <CarWash/>
                </div>

            </div>
        );
    }


    return(
        <div className="container-fluid px-0" style={styles.component}>
            <div className="row mt-5 pt-4 mx-0 px-0 h-100">
                <div className="col-md-4 px-0">
                    <h1 className="font-italic text-warning text-center mt-5">Busca un servicio...</h1>
                    <Card className="bg-light mx-3 mb-3 " style={styles.vehicleCard}>
                        <div className="row text-center d-flex justify-content-center">
                            <h1 className="text-info font-italic mt-3">Tus vehículos</h1>
                        </div>

                        <div className="row text-center d-flex justify-content-center" >
                            {showVehicle()}
                        </div>

                    </Card>
                    <Card className="bg-light mx-3 mb-3 " style={styles.serviceCard}>
                        <div className="row text-center d-flex justify-content-center">
                            <h1 className="text-info font-italic mt-3">Servicios </h1>
                        </div>

                        <div className="row text-center d-flex justify-content-center">
                            {showServices()}
                        </div>
                    </Card>
                    <Card className="bg-light mx-3 mb-3" style={styles.listCard}>
                        <div className="row text-center d-flex justify-content-center">
                            <h1 className="text-info font-italic mt-3">Servicios disponibles </h1>
                        </div>

                        <div className="row d-flex justify-content-center overflow-auto mx-0 mt-2">
                            <div className="col-md-12 ">
                                <ShowServicesComponent style={styles.scroll}/>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-md-8 px-0 mt-5">
                    <Map
                        googleMapURL = {mapURL}
                        containerElement = {<div style = {{height: '100%'}} />}
                        mapElement = {<div style = {{height: '98%'}} />}
                        loadingElement = {<p>Cargando</p>}
                    />
                </div>
            </div>
        </div>
    );

}
