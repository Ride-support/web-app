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

class RegisterComponent extends Component{
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

    handleRegisterCompany = async  (ev,args)=>{
        ev.preventDefault();
        console.log(args);
        const response = await this.props.createCompany({
            variables:args
        })
        console.log(response);
        
       // alert(JSON.stringify(response.data.createCompany));
       window.location.reload();
    };

    handleRegisterDriver = async (ev,args)=>{
        ev.preventDefault();
        console.log(args);
    	const response = await this.props.createDriver({
          variables:args
        })
        console.log(response);
		//alert(JSON.stringify(response.data.createDriver));
		window.location.reload();
    }

    render(){

        return(
            <div className="row mt-5">
				<div className="col-md-2"></div>
				<div className="col-md-8 bg-light rounded-sm">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Company" >
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
				</div>
				<div className="col-md-2"></div>
			</div>


        )
    }
}



export default compose(
    graphql(queries.mutation.CREATE_COMPANY,{name:'createCompany'}),
    graphql(queries.mutation.CREATE_DRIVER,{name:'createDriver'})
)(RegisterComponent);