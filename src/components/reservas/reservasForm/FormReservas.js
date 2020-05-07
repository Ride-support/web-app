import React from 'react';
import { Divider, Form , Button } from 'semantic-ui-react';

export default({ handleSubmit}) =>{

    const args = {};

    const handleChange = (ev,input)=>{
        args[input.name] = input.value;
    }
   
      
    return (
    <div>
        <div >
            <h1>Realiza una Reserva</h1>

            <Form fluid onSubmit={(ev) => handleSubmit(ev,args)} >

                <Form.Input name='tipoServicio' label='tipoServicio' placeholder='Ingresa tipoServicio'  onChange={handleChange} />
                <Form.Input name='fechaServicio' label='fechaServicio'  placeholder='Ingresa fechaServicio' onChange={handleChange} />
                <Form.Input name='horaServicio' label='horaServicio' placeholder='Ingresa horaServicio' onChange={handleChange} />
                <Form.Input name='lugarServicio' label='lugarServicio' placeholder='Ingresa lugarServicio' onChange={handleChange} />

                <Button type='submit' primary fluid >Realizar Reserva</Button>
            </Form>
            <Divider horizontal > 0</Divider>
            
        </div>
    </div>

    )
};