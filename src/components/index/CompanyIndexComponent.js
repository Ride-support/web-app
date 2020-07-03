
import React, {Component} from "react";
import credential from "../../credentials";
import FirstServiceComponent from "../first/FirstServiceComponent";
import {graphql} from "react-apollo";
import serviceQueries from "../services/serviceQueries";
import {flowRight as compose} from 'lodash';
import Card from "react-bootstrap/Card";
import ShowServicesComponent from "../services/showServices";
import Map from "../Map/Map";
import ServiceForm from "../services/serviceForm";
import {Carousel} from "react-bootstrap";

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
    },
    BiglistCard:{
        height: "25em"
    },
    GrandlistCard:{
        height: "46em"
    }
}

class CompanyIndexComponent extends Component{

    reloadForm = () => {
        document.getElementById("form").reset();
        console.log(document.getElementById("selectForm").name);

    };

    handlerAddService = async  (ev,args)=>{
        ev.preventDefault();

        const response = await this.props.createService({
            variables:{
                company_id: args.Idcompany,
                type_service: args.Service,
                company_name: args.Name,
                company_location: args.Location,
                prices_service: args.Prices,
                shedule_service: args.Shedule
            }
        })
        this.reloadForm()
    };

    render() {

        return (
            <div className="container-fluid px-0" style={styles.component}>
                <div className="row mt-5 pt-4 mx-0 px-0 h-100">
                    <div className="col-md-4 px-0">
                        <Card className="bg-light mx-3 mb-3" style={styles.listCard}>
                            <div className="row text-center d-flex justify-content-center">
                                <h1 className="text-info font-italic mt-3">Tus Servicios... </h1>
                            </div>

                            <div className="row d-flex justify-content-center overflow-auto mx-0 mt-2">
                                <div className="col-md-12 ">
                                    <ShowServicesComponent style={styles.scroll}/>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-light mx-3 mb-3" style={styles.BiglistCard}>
                            <div className="row text-center d-flex justify-content-center">
                                <h1 className="text-info font-italic mt-3">Añadir servicio   </h1>
                            </div>
                            <div className="row d-flex justify-content-center mx-0 mt-2">
                                <div className="col-md-12 ">
                                    <ServiceForm handleSubmit={this.handlerAddService} />
                                </div>
                            </div>

                        </Card>

                    </div>
                    <div className="col-md-8 px-0 ">
                        <Card className="bg-light mx-3 mb-3" style={styles.GrandlistCard}>
                            <div className="row text-center d-flex justify-content-center">
                                <h1 className="text-info font-italic mt-3">Reservas a tus servicios... </h1>
                            </div>

                            <div className="row d-flex justify-content-center overflow-auto mx-0 mt-2">
                                <div className="col-md-12 ">
                                    <h3 className=" font-italic text-center"> Parece que no tienes reservas actualmente</h3>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose(
    graphql(serviceQueries.mutation.CREATE_SERVICE,{name: 'createService'})
)(CompanyIndexComponent);