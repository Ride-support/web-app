import React, {Component} from 'react';

import { Button, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';
import serviceQueries from './serviceQueries';
import ServiceForm from "./serviceForm";
import ShowServicesComponent from "./showServices";

class ServiceComponent extends Component{

    constructor(props) {
        super(props);
        this.toggleModalAddService = this.toggleModalAddService.bind(this);
        this.toggleModalShowServices = this.toggleModalShowServices.bind(this);

        this.state = {
            isModalAddServiceOpened: false,
            isModalShowServicesOpened: false

        };
    }

    toggleModalAddService() {
        this.setState({
            isModalAddServiceOpened: !this.state.isModalAddServiceOpened,
            isModalShowServicesOpened: this.state.isModalShowServicesOpened
        })
    }

    toggleModalShowServices() {
        this.setState({
            isModalAddServiceOpened: this.state.isModalAddServiceOpened,
            isModalShowServicesOpened: !this.state.isModalShowServicesOpened
        })
    }


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
        window.location.reload();
    };

    render(){

        return(
            <div>
                <Button outline onClick={this.toggleModalAddService}><span>Add Service</span></Button>
                <Modal isOpen={this.state.isModalAddServiceOpened} toggle={this.toggleModalAddService} >
                    <ModalHeader toggle={this.toggleModalAddService} className="text-danger font-weight-bold justify-content-center">Add Service</ModalHeader>
                    <ModalBody>
                        <ServiceForm handleSubmit={this.handlerAddService}/>
                    </ModalBody>
                </Modal>

                <Button outline onClick={this.toggleModalShowServices}><span>Show Services</span></Button>
                <Modal isOpen={this.state.isModalShowServicesOpened} toggle={this.toggleModalShowServices} >
                    <ModalHeader toggle={this.toggleModalShowServices} className="text-danger font-weight-bold justify-content-center">Show Services</ModalHeader>
                    <ModalBody>
                        <ShowServicesComponent/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default compose(
    graphql(serviceQueries.mutation.CREATE_SERVICE,{name: 'createService'})
)(ServiceComponent);