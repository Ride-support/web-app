import React, {Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Form } from 'semantic-ui-react';

const COMPANY_BY_ID = gql`
  query COMPANY_BY_ID($id: Int!){
      companyById(id: $id) {
        id
        email
        password
        name
        city
        address
        phone
        manager
      }
    }
`;

export default ({handleSubmit}) =>{

    const id = parseInt(localStorage.getItem('id'))
    const { loading, error, data } = useQuery(COMPANY_BY_ID, {
        variables: { id},
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const args = {
        id: id,
        email: data.companyById.email,
        password: data.companyById.password,
        name:data.companyById.name,
        city:data.companyById.city,
        address: data.companyById.address,
        phone:data.companyById.phone,
        manager:data.companyById.manager

    };

    const updateApplicationState = (ev,input)=>{
        args[input.name] = input.value;
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
                                <Form.Input name='name' label='Company Name' placeholder='Write Name' onChange={updateApplicationState} defaultValue={args["name"]}/>

                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='city' label='City' placeholder='Write City' onChange={updateApplicationState} defaultValue={args["city"]} />
                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='address' label='Company Address' placeholder='Write Address' onChange={updateApplicationState} defaultValue={args["address"]} />
                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='phone' label='Contact Phone' type='number' placeholder='Write Phone number' onChange={updateApplicationState} defaultValue={args["phone"]}/>
                            </div>
                        </div>

                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='manager' label='Company Manager' placeholder='Write Manager' onChange={updateApplicationState} defaultValue={args["manager"]} />
                            </div>
                        </div>


                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="col-md-12">
                                <Form.Input name='password' label='Password' type='password' placeholder='Write Password' onChange={updateApplicationState} defaultValue={args["password"]} />
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
