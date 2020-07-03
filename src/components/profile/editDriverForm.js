import React, {Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import {Button, Form} from 'semantic-ui-react';

const DRIVER_BY_ID = gql`
    
   query DRIVER_BY_ID($id: Int!){
      driverById(id: $id) {
        id
        email
        password
        name
        lastname
        age
        address
        phone
        vehicle
        
      }
    }

`;

export default ({handleSubmit}) =>{

    const id = parseInt(localStorage.getItem('id'))
    const { loading, error, data } = useQuery(DRIVER_BY_ID, {
        variables: { id},
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    console.log("Init");
    console.log(data)
    console.log("ENd");

    const args = {
        id: id,
        email: data.driverById.email,
        password: data.driverById.password,
        name: data.driverById.name,
        lastname: data.driverById.lastname,
        age: data.driverById.age,
        address: data.driverById.address,
        phone: data.driverById.phone,
        vehicle: data.driverById.vehicle,

    };

    const updateApplicationState = (ev,input)=>{
        args[input.name] = input.value;
        console.log(args)
    }

    const handleChangeSelect = (ev,input)=>{
        args["vehicle"] = document.getElementById("selectID").value;
        console.log(args)
    }

    return (
        <div className="container ">
            <div className="row ">
                <div className="col-md-12 ">
                    <Form className="p-3 bg-light " onSubmit={(ev) => handleSubmit(ev,args)} id="form">



                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='email' label='Company Email' placeholder='Write Email'  onChange={updateApplicationState} defaultValue={args["email"]}/>
                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='password' label='Password' type='password' placeholder='Write your password' onChange={updateApplicationState} defaultValue={args["password"]}/>

                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='name' label='Name' placeholder='Write your name' onChange={updateApplicationState} defaultValue={args["name"]}/>

                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='lastname' label='Lastname' placeholder='Write your lastname' onChange={updateApplicationState} defaultValue={args["lastname"]}/>

                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='age' label='Age' type='number'  placeholder='Write your age' onChange={updateApplicationState} defaultValue={args["age"]}/>

                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='address' label='Address' placeholder='Write your address' onChange={updateApplicationState} defaultValue={args["address"]}/>

                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='phone' label='Phone' type='number'  placeholder='Write your phone number' onChange={updateApplicationState} defaultValue={args["phone"]}/>

                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label className="font-weight-bold" htmlFor="selectID">Vehicle Type</label>
                                    <select className="form-control" id="selectID" onChange={handleChangeSelect} placeholder="Select your vehicle type" defaultValue={args["vehicle"]}>
                                        <option value="" disabled>Select your vehicle type</option>
                                        <option>Carro</option>
                                        <option>Moto</option>
                                        <option>Bicicleta</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <hr className="bg-info"></hr>
                        <div className="row">
                            <div className="col-md-4">

                            </div>
                            <div className="text-center col-md-4 ">
                                <button type="submit" className=" btn btn-block p-2 btn-warning ">
                                    <b>Editar</b></button>
                            </div>
                        </div>

                    </Form>
                </div>
            </div>
        </div>

    )
};
