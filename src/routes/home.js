import React ,{Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ToolBar from '../components/register/ToolbarRegister';


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
class RegisterComponent extends Component{

  render(){
      return(
      <div>
    <h1>Hhhh</h1>
    <ToolBar/>
      <ExchangeRates/>
      </div>
      );
  }
}


export default RegisterComponent;
/*

*/

