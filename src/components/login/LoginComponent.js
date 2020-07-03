import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';
import LoginDriver from './loginForms/LoginDriver'
import LoginCompany from './loginForms/LoginCompany'
import { Tabs } from "@yazanaabed/react-tabs";
import decode from 'jwt-decode';
import gql from 'graphql-tag';
import client from '../../apollo';

//Custom utils 
import queries from '../utils/queries';
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";

const driverById = gql`
	query driverById($id: Int!) {
		driverById(id: $id) {
			name
			lastname
			vehicle
		}
	}
`;

const companyById = gql`
	query companyById($id: Int!) {
		companyById(id: $id){
			manager
			name
			address
		}
	}
`;

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

        const token = response.data.loginDriver.token;
		const driverID = decode(token).sub;
        localStorage.setItem("user_type","driver");
        localStorage.setItem("id",driverID);
		localStorage.setItem('token',token);

		client.query({
			query: driverById,
			variables: {
				id: driverID
			}
		}).then(result => {
			localStorage.setItem("name",result.data.driverById.name+" "+result.data.driverById.lastname);
			localStorage.setItem("vehicle_type",result.data.driverById.vehicle.toLowerCase());
		});

        //alert("El token es\n"+JSON.stringify(response.data.loginDriver.token));
		window.location.assign("/driver_index");
    };

	handleSubmitCompany = async  (ev,args)=>{
		this.toggleModal();
        ev.preventDefault();
        console.log(args);

        const loginResponse = await this.props.loginCompany({
            variables:args
        })
        console.log(loginResponse);

		const token = loginResponse.data.loginCompany.token;
		const companyID = decode(token).sub;
		localStorage.setItem("user_type","company");
		localStorage.setItem("id",companyID);
		localStorage.setItem('token',token);

		client.query({
			query: companyById,
			variables: {
				id: companyID
			}
		}).then(result => {
			localStorage.setItem("name",result.data.companyById.manager);
			localStorage.setItem("company_name",result.data.companyById.name);
			localStorage.setItem("location",result.data.companyById.address);
		});

        //alert("El token es\n"+JSON.stringify(loginResponse.data.loginCompany.token));
        window.location.assign("/company_index");
    };

    render() {


		return (
			<div >
				<Button className="bg-warning" outline onClick={this.toggleModal}>
					<span className="font-weight-bold text-dark font-italic">Log in</span>
					<Icon name="sign-in"  className="ml-1 text-dark" size="large"/>
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<Tabs
							activeTab={{
								id: "tab1"
							}}
							>
							<Tabs.Tab id="tab1" title="Driver">
								<div style={{ padding: 10 }}>
									<LoginDriver handleSubmit={this.handleSubmitDriver}/>
								</div>
							</Tabs.Tab>
							<Tabs.Tab id="tab2" title="Company">
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
    graphql(queries.mutation.LOGIN_COMPANY,{name:'loginCompany'})

)(LoginForm);