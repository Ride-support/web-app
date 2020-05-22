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

                <Form.Input name='email' label='Email' placeholder='Write company Email'  onChange={handleChange} />
                <Form.Input name='password' label='Password' type='password' placeholder='Ingresa company password' onChange={handleChange} />
                <Button type='submit' primary fluid >Sign in as Company</Button>
            </Form>
        </div>
    </div>

    )
};