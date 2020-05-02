import React from 'react';
import { Divider, Form , Button } from 'semantic-ui-react';


export default({styles, handleClick, handleSubmit}) =>{


const args = {};

const handleChange = (ev,input)=>{
    args[input.name] = input.value;
}

return (
<div>
    <div style={styles.box}>
<h1>Company</h1>

<Form fluid onSubmit={(ev) => handleSubmit(ev,args)} >

  <Form.Input name='email' label='Company Email' placeholder='Ingresa Email'  onChange={handleChange} />
  <Form.Input name='password' label='Password' type='password' placeholder='Ingresa Password' onChange={handleChange} />
  <Form.Input name='name' label='Company Name' placeholder='Ingresa Name' onChange={handleChange} />
  <Form.Input name='city' label='City' placeholder='Ingresa City' onChange={handleChange} />
  <Form.Input name='address' label='Company Address' placeholder='Ingresa Address' onChange={handleChange} />
  <Form.Input name='phone' label='Contact Phone' type='number' placeholder='Ingresa Phone number' onChange={handleChange}/>
  <Form.Input name='manager' label='Company Manager' placeholder='Ingresa Manager' onChange={handleChange} />

<Button type='submit' 

primary 
fluid 
>Registrar Empresa</Button>
</Form>
<Divider horizontal > 0</Divider>
asdasdas
    </div>





    <div style={styles.box}>
¿Eres un Conductor? <a href="" onClick={handleClick}>Registrarse como Conductor</a>
    </div>
</div>

)
};