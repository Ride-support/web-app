import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';
import LoginDriver from './loginForms/LoginDriver'
import LoginCompany from './loginForms/LoginCompany'
import { Tabs } from "@yazanaabed/react-tabs";
//Custom utils 
import queries from '../utils/queries';

//the login form

class LoginForm extends Component {
	
	constructor(props) {
		super(props);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmitDriver = this.handleSubmitDriver.bind(this);

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

    handleSubmitDriver = async  (ev,args)=>{
		this.toggleModal();
        ev.preventDefault();
        console.log(args);
        const response = await this.props.loginDriver({
            variables:args
        })
        console.log(response);
        alert(JSON.stringify(response.data.loginDriver));
    };

	handleSubmitCompany = async  (ev,args)=>{
		this.toggleModal();
        ev.preventDefault();
        console.log(args);
        const response = await this.props.loginCompany({
            variables:args
        })
        console.log(response);
        alert(JSON.stringify(response.data.loginCompany));
    };

    render() {
		return (
			<div >
				<Button outline onClick={this.toggleModal}><span>Login</span></Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<Tabs
							activeTab={{
								id: "tab1"
							}}
							>
							<Tabs.Tab id="tab1" title="Conductor">
								<div style={{ padding: 10 }}>
									<LoginDriver handleSubmit={this.handleSubmitDriver}/>
								</div>
							</Tabs.Tab>
							<Tabs.Tab id="tab2" title="Compañía">
								<div style={{ padding: 10 }}>
									<LoginCompany handleSubmit={this.handleSubmitCompany}/>
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
    graphql(queries.mutation.LOGIN_DRIVER,{name:'loginDriver'}),
    graphql(queries.mutation.LOGIN_COMPANY,{name:'loginCompany'}),
)(LoginForm);