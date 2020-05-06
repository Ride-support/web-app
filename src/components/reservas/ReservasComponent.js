
import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';

import { graphql } from 'react-apollo'
import {flowRight as compose} from 'lodash';

//Custom utils 
import queries from '../utils/queries';

import FormReservas from './reservasForm/FormReservas';
import ShowReservas from './reservasShow/ShowReservas';

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

class ReservasComponent extends Component {

    state={
        showAllReservas:true,
        showFormReserva:false,
    }
   

    showAllReservas = (ev)=>{
        ev.preventDefault();
        this.setState({showFormReserva:false, showAllReservas:true});
        
    }
    showFormReserva = (ev)=>{
        ev.preventDefault();
        this.setState({showFormReserva:true, showAllReservas:false});
        
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
        const {showFormReserva, showAllReservas} = this.state;
       
    

        
        return(
            
            <Grid fluid columns={2} centered verticalAlign="middle" style={styles.grid}>
                <Grid.Row fluid>
                    <Grid.Column>
                
                <img src="images/logo_rideSupport.png" alt="logo" fluid></img>
                    </Grid.Column>
                    <Grid.Column>
                    {showAllReservas  && <ShowReservas handleClick={this.showFormReserva} />}
                    {showFormReserva && <FormReservas styles={styles} handleClick={this.showAllReservas} handleSubmit={this.handleRegisterReserva} />}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        
        )
    }

}


export default compose(
    graphql(queries.mutation.CREATE_RESERVAS,{name:"createReserva"})
    )
    (ReservasComponent)