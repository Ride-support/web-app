import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';


//Custom utils 
import queries from '../utils/queries';
   
//Custom imports
import ToolBar from '../register/ToolbarRegister';
import RegisterCompany from '../register/registerForms/RegisterCompany';
import RegisterDriver from '../register/registerForms/RegisterDriver';

//Constantes
const styles={
    grid:{
        height:'100%',
        width:'900px',
        margin:'0 auto',
    },
    box:{
        background:'white',
        border:'1px solid #e6e6e6',
        textAlign:'center',
        marginBottom:'1em',
        padding:'1em',

    }
}
 



class RegisterComponent extends Component{
    state={
        showCompanyForm:true,
        showDriverForm:false,
    }
   

    showDriverForm = (ev)=>{
        ev.preventDefault();
        this.setState({showCompanyForm:false, showDriverForm:true});
    }
    showCompanyForm = (ev)=>{
        ev.preventDefault();
        this.setState({showCompanyForm:true, showDriverForm:false});
    }

    handleRegisterCompany = async  (ev,args)=>{
        ev.preventDefault();
        console.log(args);
 const response = await this.props.createCompany({
      variables:args
    })
    console.log(response);
    alert(response);
     };
    
   


     
    handleRegisterDriver = async (ev,args)=>{
        ev.preventDefault();
        console.log(args);
    const response = await this.props.createDriver({
          variables:args
        })
    console.log(response);
    alert(response);
    }

    render(){
        const {showCompanyForm, showDriverForm} = this.state;
       
    

        
        return(
            
            <Grid fluid columns={2} centered verticalAlign="middle" style={styles.grid}>
                <Grid.Row>
                    <ToolBar/>
                </Grid.Row>
                <Grid.Row fluid>
                    <Grid.Column>
                
                <img src="images/logo_rideSupport.png" alt="logo" fluid></img>
                    </Grid.Column>
                    <Grid.Column>
                    {showCompanyForm  && <RegisterCompany styles={styles} handleClick={this.showDriverForm} handleSubmit={this.handleRegisterCompany} />}
                    {showDriverForm  && <RegisterDriver styles={styles} handleClick={this.showCompanyForm} handleSubmit={this.handleRegisterDriver} />}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        
        )
    }
}



export default compose(
    graphql(queries.mutation.CREATE_COMPANY,{name:'createCompany'}),
    graphql(queries.mutation.CREATE_DRIVER,{name:'createDriver'})
)(RegisterComponent);