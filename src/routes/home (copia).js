import React ,{Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import ReservasComponent from '../components/reservas/ReservasComponent'
import RegisterComponent from '../components/register/RegisterComponent';
import LoginComponent from '../components/login/LoginComponent';
import Map from '../components/Map/Map';
import credential from '../credentials';
import queries from '../components/utils/queries';
import ServiceComponent from "../components/services/serviceComponent";

const mapURL = `https://maps.googleapis.com/maps/api/js?v_3.exp&key=${credential.mapsKey}`;




/*
function ShowCompany() {
  const { loading, error, data } = useQuery(queries.query.GET_ALL_COMPANYS);

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
function ShowDriver() {
  const { loading, error, data } = useQuery(queries.query.GET_ALL_DRIVERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allDrivers.map(({id,email, password }) => (
    <div key={id}>
      <p>
        {email}: {password}
      </p>
    </div>
  ));
}
function ShowCoordinates() {
  const { loading, error, data } = useQuery(queries.query.GET_ALL_COORDINATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.allCoordinates.map(({_id,latitude, longitude }) => (
    <div key={_id}>
      <p>
        {latitude}: {longitude}
      </p>
    </div>
  ));
}
        <ShowCompany/>
        <ShowDriver/>
        <ShowCoordinates/>

*/
class HomeComponent extends Component{

  render(){
    return(
      <div style ={{width:"100vw", height:"100vh"}}>
          <div className="row justify-content-end bg-dark mr-3">
              <ServiceComponent/>
              <ReservasComponent/>
              <LoginComponent/>
              <RegisterComponent/>
          </div>

        <Map
          googleMapURL = {mapURL}
          containerElement = {<div style = {{height: '97%'}} />}
          mapElement = {<div style = {{height: '100%'}} />}
          loadingElement = {<p>Cargando</p>}
        />
        
      </div>
    );
  }
}


export default HomeComponent;
/*

*/

