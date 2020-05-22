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
            <h1 className="text-center">Sign up as a Driver!</h1>

            <Form fluid onSubmit={(ev) => handleSubmit(ev,args)} >

                <Form.Input name='email' label='Email' placeholder='Write your email'  onChange={handleChange} />
                <Form.Input name='password' label='Password' type='password' placeholder='Write your password' onChange={handleChange} />
                <Form.Input name='name' label='Name' placeholder='Write your name' onChange={handleChange} />
                <Form.Input name='lastname' label='Lastname' placeholder='Write your lastname' onChange={handleChange} />
                <Form.Input name='age' label='Age' type='number'  placeholder='Write your age' onChange={handleChange} />
                <Form.Input name='address' label='Address' placeholder='Write your address' onChange={handleChange}/>
                <Form.Input name='phone' label='Phone' type='number'  placeholder='Write your phone number' onChange={handleChange} />
                <Form.Input name='vehicle' label='Type Vehicle' placeholder='Write your vehicle type' onChange={handleChange} />
                <Button type='submit' className="bg-warning" fluid >Sign up</Button>
            </Form>
            <Divider horizontal > 0</Divider>
            
        </div>
    </div>

    )
};