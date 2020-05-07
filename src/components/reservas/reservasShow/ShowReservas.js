import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { gql } from "apollo-boost";

const GET_ALL_RESERVAS = gql`
{
    
        reservaById(id: "5eb20691c88543c61655446e") {
          horaServicio
          fechaServicio
          lugarServicio
          tipoServicio
        }
      
      
}
`;
function ExchangeRates() {
    const { loading, error, data } = useQuery(GET_ALL_RESERVAS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.reservaById.map(({id,horaServicio, fechaServicio, lugarServicio, tipoServicio }) => (
        <tr style={{border: "1px solid black"}}>
          
        <td>{lugarServicio}</td>
        <td>{tipoServicio}</td>
        <td>{fechaServicio}</td>
        <td>{horaServicio}</td>
       
        
    </tr>
      
    ));
  }
  export default()=>{
return(
    <div>
<h1>Reservas Actuales</h1>
<table style={{border: "1px solid black"}}>
          <tr style={{border: "1px solid black",
                background:"yellow"}}>
          <th>lugarServicio</th>
          <th>tipoServicio</th>
          <th>fechaServicio</th>
          <th>horaServicio</th>
          
          </tr>
          <ExchangeRates />
          
          

    </table>

    
    </div>
    )

  }