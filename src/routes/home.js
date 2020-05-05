import React ,{Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import RegisterComponent from '../components/register/RegisterComponent';
import LoginComponent from '../components/login/LoginComponent';
import Map from '../components/Map';
import credential from '../credentials';

const mapURL = `https://maps.googleapis.com/maps/api/js?v_3.exp&key=${credential.mapsKey}`;

const EXCHANGE_RATES = gql`
{
  allCompanys{
    id,
    email,
    password
  }
}
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allCompanys.map(({id,email, password }) => (
    <div key={id}>
      <p>
        {email}: {password}
      </p>
    </div>
  ));
}
class HomeComponent extends Component{

  render(){
    return(
      <div>
        <LoginComponent/>
        <RegisterComponent/>
        <Map
          googleMapURL = {mapURL}
          containerElement = {<div style = {{height: '800px'}} />}
          mapElement = {<div style = {{height: '100%'}} />}
          loadingElement = {<p>Cargando</p>}
        />
        <ExchangeRates/>
      </div>
    );
  }
}


export default HomeComponent;
/*

*/

