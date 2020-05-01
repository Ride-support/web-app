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
<h1>Driver</h1>

<Form fluid onSubmit={(ev) => handleSubmit(ev,args)} >

  <Form.Input name='email' label='Email' placeholder='Ingresa Email'  onChange={handleChange} />
  <Form.Input name='password' label='Password' type='password' placeholder='Ingresa Password' onChange={handleChange} />
  <Form.Input name='name' label='Name' placeholder='Ingresa Name' onChange={handleChange} />
  <Form.Input name='lastname' label='Lastname' placeholder='Ingresa Lastname' onChange={handleChange} />
  <Form.Input name='age' label='Age' type='number'  placeholder='Ingresa Age' onChange={handleChange} />
  <Form.Input name='address' label='Address' placeholder='Ingresa tu Address' onChange={handleChange}/>
  <Form.Input name='phone' label='Phone' type='number'  placeholder='Ingresa Phone' onChange={handleChange} />
  <Form.Input name='vehicle' label='Type Vehicle' placeholder='Ingresa el Type Vehicle' onChange={handleChange} />
<Button type='submit' primary fluid >Registrarte como Conductor</Button>
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