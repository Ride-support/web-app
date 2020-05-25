
import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { Tabs } from "@yazanaabed/react-tabs";
import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';

//Custom utils 
import queries from '../utils/queries';

import FormReservas from './reservasForm/FormReservas';
import ShowReservas from './reservasShow/ShowReservas';

//Constantes


class ReservasComponent extends Component {

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


    handleRegisterReserva = async  (ev,args)=>{
        ev.preventDefault();
        console.log(args);
        const response = await this.props.createReserva({
            variables:args
        })
        console.log(response);
        
       // alert(JSON.stringify(response.data.createReserva));
        window.location.reload();
    };
    render(){
        
       
    

        
        return(
            <div >
				<Button outline onClick={this.toggleModal}><span>Reservas</span></Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
					<ModalHeader toggle={this.toggleModal}>Reservar servicio</ModalHeader>
					<ModalBody>
						<FormReservas  handleSubmit={this.handleRegisterReserva} />
					</ModalBody>
				</Modal>
			</div>
            
           
        
        )
    }

}


export default compose(
    graphql(queries.mutation.CREATE_RESERVAS,{name:"createReserva"})
    )
    (ReservasComponent)