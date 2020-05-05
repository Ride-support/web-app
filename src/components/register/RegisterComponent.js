import React, {Component} from 'react';

import { Button, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';
import { Tabs } from "@yazanaabed/react-tabs";

//Custom utils 
import queries from '../utils/queries';
   
//Custom imports

import RegisterCompany from '../register/registerForms/RegisterCompany';
import RegisterDriver from '../register/registerForms/RegisterDriver';

//Constantes




class RegisterComponent extends Component{
	constructor(props) {
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleRegisterCompany = this.handleRegisterDriver.bind(this);

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

    

    handleRegisterCompany = async  (ev,args)=>{
        ev.preventDefault();
        console.log(args);
        const response = await this.props.createCompany({
            variables:args
        })
        console.log(response);
        
        alert(JSON.stringify(response.data.createCompany));
        
    };
    
   


     
    handleRegisterDriver = async (ev,args)=>{
        ev.preventDefault();
        console.log(args);
    const response = await this.props.createDriver({
          variables:args
        })
        console.log(response);
        alert(JSON.stringify(response.data.createDriver));
    }

    render(){
        
       
    

        
        return(
            <div >
				<Button outline onClick={this.toggleModal}><span>Register</span></Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
					<ModalHeader toggle={this.toggleModal}>Register</ModalHeader>
					<ModalBody>
						<Tabs
							activeTab={{
								id: "tab1"
							}}
							>
							<Tabs.Tab id="tab1" title="Company">
								<div style={{ padding: 10 }}>
									<RegisterCompany handleSubmit={this.handleRegisterCompany}/>
								</div>
							</Tabs.Tab>
							<Tabs.Tab id="tab2" title="Driver">
								<div style={{ padding: 10 }}>
									<RegisterDriver handleSubmit={this.handleRegisterDriver}/>
								</div>
							</Tabs.Tab>
						</Tabs>
					</ModalBody>
				</Modal>
			</div>
        )
    }
}



export default compose(
    graphql(queries.mutation.CREATE_COMPANY,{name:'createCompany'}),
    graphql(queries.mutation.CREATE_DRIVER,{name:'createDriver'})
)(RegisterComponent);