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

                <Form.Input name='email' label='Email' placeholder='Write driver email'  onChange={handleChange} />
                <Form.Input name='password' label='Password' type='password' placeholder='Write driver password' onChange={handleChange} />
                <Button className="bg-warning" type='submit' fluid >Sign in as Driver</Button>
            </Form>
        </div>
    </div>

    )
};