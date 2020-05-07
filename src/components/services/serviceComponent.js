import React, {Component} from 'react';

import { Button, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';
import serviceQueries from './serviceQueries';
import ServiceForm from "./serviceForm";

class ServiceComponent extends Component{

    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
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
                <Button outline onClick={this.toggleModal}><span>Add Service</span></Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal} className="text-danger font-weight-bold justify-content-center">Add Service</ModalHeader>
                    <ModalBody>
                        <ServiceForm handleSubmit={this.handlerAddService}/>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default compose(
    graphql(serviceQueries.mutation.CREATE_SERVICE,{name: 'createService'})
)(ServiceComponent);