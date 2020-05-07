import React, {Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

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

const DELETE_SERVICE = gql`
    mutation DeleteService($id: Int!){
        deleteServiceM(id : $id)
    }
`;

function GetAllServices() {
    const [deleteService, { datos }] = useMutation(DELETE_SERVICE);
    const { loading, error, data } = useQuery(ALL_SERVICES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;



    return data.allServicesM.map(({Idcompany,Service,Name,Location,Prices,Shedule}) => (
        <div className="col-md-6 mb-2" key={Idcompany}>
            <div className="card ">
                <div className="card-header ">
                    <div className="row justify-content-center">
                        <h4 className="text-info font-weight-bold"> Service: </h4>
                        <h4 className="text-center"> {Service}</h4>
                    </div>
                </div>
                <div className="card-body " >
                    <div className="row justify-content-center">
                        <h5 className="text-primary font-weight-bold"> Name:  </h5>
                        <h5> {Name}</h5>
                    </div>
                    <div className="row justify-content-center">
                        <h5 className="text-primary font-weight-bold"> Location: </h5>
                        <h5> {Location}</h5>
                    </div>
                    <div className="row justify-content-center">
                        <h5 className="text-primary font-weight-bold"> Prices: </h5>
                        <h5> {Prices}</h5>
                    </div>
                    <div className="row justify-content-center">
                        <h5 className="text-primary font-weight-bold"> Schedule: </h5>
                        <h5> {Shedule}</h5>
                    </div>
                    <hr className="bg-dark"></hr>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <button  className=" btn btn-block p-2 btn-success ">
                                <b>Editar</b></button>
                        </div>
                        <div className="col-md-6">
                            <button type="submit" className=" btn btn-block p-2 btn-info" onClick={e => {
                                if (window.confirm("¿Eliminar servicio?")){
                                    deleteService({ variables: { id: Idcompany } });
                                }else{
                                    window.alert("Servicio no eliminado");
                                }
                            }
                            }>
                                <b>Eliminar</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));
}



class ShowServicesComponent extends Component{


    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <GetAllServices/>
                </div>

            </div>
        );
    }
}

export default ShowServicesComponent;
