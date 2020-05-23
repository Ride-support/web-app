import React, {Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Form } from 'semantic-ui-react';

const ALL_SERVICES = gql`
    {
        allServicesM{
            Idcompany
            Service
            Name
            Location
            Prices
            Shedule

        }
    }
`;

export default ({handleSubmit}) =>{

    const { loading, error, data } = useQuery(ALL_SERVICES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const all_services = data.allServicesM.map( item => {
        return { key: item.Idcompany, value: item.Service, text: item.Service };
    });
    const args = {};

    const updateApplicationState = (ev,input)=>{
        if (input.name == 'Idcompany'){
            args[input.name] = parseInt(input.value);
        }else{
            args[input.name] = input.value;
        }

        console.log(args)
    }

    return (
        <div className="container ">
            <div className="row ">
                <div className="col-md-12 ">
                    <Form className="p-3 bg-light " onSubmit={(ev) => handleSubmit(ev,args)} id="form">
                        <div className="row justify-content-center d-flex m-0">
                            <div className="ui labeled input w-100">
                                <div className="ui label label">Company ID</div>
                                <Form.Input className='w-100' type='number' placeholder='Write your company id'  name='Idcompany' onChange={updateApplicationState}/>
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="ui labeled input w-100">
                                <div className="ui label label">Service Type</div>
                                <Form.Select  className="w-100" placeholder='Select your service type' options={all_services} name="Service" onChange={updateApplicationState}/>
                            </div>
                        </div>
                        <hr className="bg-info"></hr>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h4>About company </h4>
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="ui labeled input w-100">
                                <div className="ui label label">Name</div>
                                <Form.Input type="text" placeholder="Write your company's name" className="w-100" name="Name" onChange={updateApplicationState}/>
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="ui labeled input w-100">
                                <div className="ui label label">Location</div>
                                <Form.Input type="text" placeholder="Write your company's location" className="w-100" name="Location" onChange={updateApplicationState}/>
                            </div>
                        </div>
                        <hr className="bg-info"></hr>
                        <div clas="row">
                            <div className="col-md-12 text-center">
                                <h4>About service </h4>
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="ui labeled input w-100">
                                <div className="ui label label">Price</div>
                                <Form.Input type="text" placeholder="Write your service's cost" className="w-100" name="Prices" onChange={updateApplicationState}/>
                            </div>
                        </div>
                        <div className="row justify-content-center d-flex m-0 mt-2">
                            <div className="ui labeled input w-100">
                                <div className="ui label label">Schedule</div>
                                <Form.Input type="text" placeholder="Write your service's schedule" className="w-100" name="Shedule" onChange={updateApplicationState}/>
                            </div>
                        </div>
                        <hr className="bg-info"></hr>
                        <div className="row">
                            <div className="col-md-4">

                            </div>
                            <div className="text-center col-md-4 ">
                                <button type="submit" className=" btn btn-block p-2 btn-warning ">
                                    <b>Add Service</b></button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>

    )
};
