import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import EditCompanyForm from "./editCompanyForm";
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
class CompanyProfileComponent extends Component{

    handleUpdateCompany = async  (ev,args)=>{
        ev.preventDefault();
        console.log(args);
        const response = await this.props.updateCompany({
            variables:args
        })

        localStorage.setItem("location",args["address"]);
        localStorage.setItem("name",args["manager"]);
        alert("¡Company actualizada!");
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
                                <h1 className="text-info font-italic mt-3">Datos de tu Empresa</h1>
                            </div>

                            <div className="row text-center d-flex justify-content-center" >
                                <EditCompanyForm handleSubmit={this.handleUpdateCompany}/>
                            </div>

                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}


export default compose(
    graphql(queries.mutation.UPDATE_COMPANY,{name:'updateCompany'})
)(CompanyProfileComponent);