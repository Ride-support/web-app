import React from 'react';
import { Divider, Form , Button } from 'semantic-ui-react';

export default({ handleSubmit}) =>{

    const args = {
        vehicle : "carro"
    };

    const handleChange = (ev,input)=>{
        args[input.name] = input.value;
        console.log(args);
    }

    const handleChangeSelect = (ev,input)=>{
        args["vehicle"] = document.getElementById("selectID").value;
        console.log(args);
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
                <div className="form-group">
                    <label className="font-weight-bold" htmlFor="selectID">Vehicle Type</label>
                    <select className="form-control" id="selectID" onChange={handleChangeSelect} placeholder="Select your vehicle type">
                        <option>Carro</option>
                        <option>Moto</option>
                        <option>Bicicleta</option>
                    </select>
                </div>
                <Button type='submit' className="bg-warning" fluid >Sign up</Button>
            </Form>
            <Divider horizontal > 0</Divider>
            
        </div>
    </div>

    )
};