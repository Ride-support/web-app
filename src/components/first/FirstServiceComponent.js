import React, {Component, useState} from 'react';
import { Carousel,Card,Button } from 'react-bootstrap';
import {Grid} from "semantic-ui-react";
import ServiceForm from "../services/serviceForm";
import {graphql} from "react-apollo";
import serviceQueries from "../services/serviceQueries";
import {flowRight as compose} from 'lodash';

const styles={
    div: {
        backgroundImage: "url(" + "images/HomeBackground.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed'

    },
    topRow:{
        height: '50%',
    },
    h1:{
        fontSize: "4em",
    },
    carousel:{
        width: '50%',
        dataInterval: "false",
    },
    itemOne:{
        height: '500px',
    },
    card:{
        width: "70%",
        margin: "auto",

    },
    itemTwo:{
        height: '500px',
    },
}

class FirstServiceComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            index: 0

        };
    }

    handleSelect = () => {
        if (this.state.index == 1){
            this.setState({
                index: 0
            })
        }else{
            this.setState({
                index: 1
            })
        }
        console.log(this.state.index);

    };

    reloadForm = () => {
        document.getElementById("form").reset();
        console.log("hi");
        console.log(document.getElementById("select").name);
        console.log("bye");
        this.handleSelect();

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
        console.log(response);
        this.handleSelect();
    };

    render() {

        return(
            <div className="container-fluid">
                <Grid columns={1} centered style={styles.div}>
                    <Grid.Row className="mt-5 pt-5" style={styles.topRow}>
                        <h1 style={styles.h1} className="text-light">Hola</h1>
                        <h1 style={styles.h1} className="text-danger mx-3">{localStorage.getItem("name")}</h1>
                        <h1 style={styles.h1} className="text-light">, Bienvenido a </h1>
                        <h1 style={styles.h1} className="font-italic text-warning pt-1 ml-3"> Ride-Support</h1>
                    </Grid.Row>
                    <Grid.Row >
                        <h1 className="text-light"> Añada los servicios que ofrece su empresa </h1>
                    </Grid.Row>
                    <Grid.Row>
                        <Carousel activeIndex={this.state.index}  controls={false} indicators={false} style={styles.carousel} interval={500000}>
                            <Carousel.Item style={styles.itemOne}>
                                <ServiceForm handleSubmit={this.handlerAddService} />

                            </Carousel.Item>
                            <Carousel.Item style={styles.itemTwo} >
                                <div className="row mb-0 ">
                                    <div className="row" style={{height: "400px"}}>
                                    </div>
                                    <Card style={styles.card} >

                                        <Card.Body>
                                            <Card.Title><h3 className="text-danger">Servicio Añadido</h3></Card.Title>
                                            <Card.Text>
                                                <h4>Si en su empresa ofrecen más servicios, puede agregarlos ahora mismo</h4>
                                            </Card.Text>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Button variant="info" onClick={this.reloadForm}>Agregar más servicios</Button>
                                                </div>
                                                <div className="col-md-6">
                                                    <Button variant="warning" href="/company_index">Continuar</Button>
                                                </div>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </div>

                            </Carousel.Item>
                        </Carousel>
                    </Grid.Row>
                </Grid>
            </div>

        );
    }

}

export default compose(
    graphql(serviceQueries.mutation.CREATE_SERVICE,{name: 'createService'})
)(FirstServiceComponent);



