import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import EditDriverForm from "./editDriverForm";
import {graphql} from "react-apollo";
import queries from "../utils/queries";
import {flowRight as compose} from 'lodash';

const styles={
    component: {
        backgroundImage: "url(" + "images/HomeBackground.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        height: "63em"

    },
    vehicleCard:{
        height: "30em"
    },
    serviceCard:{
        height: "17em"
    },
    littleCard:{
        height: "10em"
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
class UserProfileComponent extends Component{

    handleUpdateDriver = async  (ev,args)=>{
        ev.preventDefault();
        console.log(args);
        const response = await this.props.updateDriver({
            variables:args
        })

        localStorage.setItem("vehicle_type",args["vehicle_type"]);
        localStorage.setItem("name",args["name"]+args["lastname"]);
        alert("¡Driver actualizado!");
    };

    render(){
        return(
            <div className="container-fluid px-0" style={styles.component}>
                <div className="row mt-5 pt-4 mx-0 px-0 h-100">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 px-0">
                        <h1 className="font-italic text-warning text-center mt-5">Hola, {localStorage.getItem('name')}, aqui puedes editar tu perfil...</h1>
                        <Card className="bg-light mx-3 mb-3 " style={styles.vehicleCard}>
                            <div className="row text-center d-flex justify-content-center">
                                <h1 className="text-info font-italic mt-3">Tu perfil</h1>
                            </div>

                            <div className="row text-center d-flex justify-content-center" >
                                <EditDriverForm handleSubmit={this.handleUpdateDriver}/>
                            </div>

                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}


export default compose(
    graphql(queries.mutation.UPDATE_DRIVER,{name:'updateDriver'})
)(UserProfileComponent);