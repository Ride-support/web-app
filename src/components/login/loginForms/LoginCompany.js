import React from 'react';
import { Form , Button } from 'semantic-ui-react';

export default({styles, handleSubmit}) =>{

    const args = {};

    const handleChange = (ev,input)=>{
        args[input.name] = input.value;
    }

    return (
    <div>
        <div >

            <Form fluid onSubmit={(ev) => handleSubmit(ev,args)} >

                <Form.Input name='email' label='Email' placeholder='Ingresa Email'  onChange={handleChange} />
                <Form.Input name='password' label='Password' type='password' placeholder='Ingresa Password' onChange={handleChange} />
                <Button type='submit' primary fluid >Ingresar como compañía</Button>
            </Form>
        </div>
    </div>

    )
};