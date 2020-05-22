import React ,{Component} from 'react';
import RegisterComponent from "../components/register/RegisterComponent";
import {Grid} from "semantic-ui-react";

const styles={
    div: {
        backgroundImage: "url(" + "images/HomeBackground.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat'

    },
    grid:{

    }
}

class HomeComponent extends Component{

  render(){
    return(
      <Grid verticalAlign='middle' columns={2} centered style={styles.div}>
          <Grid.Row>
              <Grid.Column>
                  <div className="pl-5">
                      <h1 className="display-3 text-light text-left">Ride-Support</h1>
                      <p className="lead text-light">Busca parqueadero, servicio de lavado y taller</p>
                  </div>

              </Grid.Column>
              <Grid.Column>
                  <div className="text-center">
                      <RegisterComponent/>
                  </div>

              </Grid.Column>
          </Grid.Row>
      </Grid>
    );
  }
}


export default HomeComponent;
/*

*/

