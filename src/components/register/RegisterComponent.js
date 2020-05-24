import React, {Component} from 'react';

import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';
import { Tabs } from "@yazanaabed/react-tabs";

//Custom utils 
import queries from '../utils/queries';
   
//Custom imports

import RegisterCompany from '../register/registerForms/RegisterCompany';
import RegisterDriver from '../register/registerForms/RegisterDriver';
import decode from "jwt-decode";

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
        

		const companyID = decode(response.data.createCompany.token).sub;
		localStorage.setItem("id",companyID);
		localStorage.setItem('token',response.data.createCompany.token);
		localStorage.setItem("user_type","company");
		localStorage.setItem("name",args.manager);
		localStorage.setItem("company_name",args.name);
		localStorage.setItem("location",args.address);

		alert("Autenticado con Token: "+JSON.stringify(response.data.createCompany.token));
		window.location.assign("/firstService");
    };

    handleRegisterDriver = async (ev,args)=>{
        ev.preventDefault();
        console.log(args);
    	const response = await this.props.createDriver({
          variables:args
        })
        console.log(response);

		const driverID = decode(response.data.createDriver.token).sub;
		localStorage.setItem("id",driverID);
		localStorage.setItem('token',response.data.createDriver.token);
		localStorage.setItem("user_type","driver");
		localStorage.setItem("name",args.name+" "+args.lastname);
		localStorage.setItem("vehicle_type",args.vehicle.toLowerCase());


		alert("Autenticado con Token: "+JSON.stringify(response.data.createDriver.token));
		window.location.assign("/driver_index");
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