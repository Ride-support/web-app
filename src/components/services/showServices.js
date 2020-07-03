import React, {Component} from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import Button from "react-bootstrap/Button";
import ReservasComponent from "../reservas/ReservasComponent";

const styles={
    inline:{
        display: "inline-block"
    }
}

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

function GetAllServices(Vehicle_type) {


    const { loading, error, data } = useQuery(ALL_SERVICES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return data.allServicesM.map(({Idcompany,Service,Name,Location,Prices,Shedule}) => {

            if(Service.split(" ")[2] == Vehicle_type.Vehicle_type){

                return (
                    <div className="col-md-12" >

                        <div className="col-md-12" key={Idcompany}>
                            <div className="row">
                                <div className="col-md-9 ">
                                    <h3 className="text-danger">{Service}</h3>
                                    <h4 className="text-info mr-2" style={styles.inline}>Empresa: </h4>
                                    <h4 style={styles.inline}>{Name} </h4>
                                    <h5>Localización: {Location}</h5>
                                    <h5>Precio: {Prices}</h5>
                                    <h5>Horario: {Shedule}</h5>
                                </div>
                                <div className="col-md-3 justify-content-end mt-5 pt-2 align">
                                    <ReservasComponent/>
                                </div>

                            </div>
                            <hr className="text-danger"/>
                        </div>
                    </div>


                );
            }else if(Vehicle_type.Vehicle_type==null){ //company_index
                return (
                    <div className="col-md-12">

                        <div className="col-md-12" key={Idcompany}>
                            <div className="row">
                                <div className="col-md-12 ">
                                    <h3 className="text-danger">{Service}</h3>
                                    <h4 className="text-info mr-2" style={styles.inline}>Empresa: </h4>
                                    <h4 style={styles.inline}>{Name} </h4>
                                    <h5>Localización: {Location}</h5>
                                    <h5>Precio: {Prices}</h5>
                                    <h5>Horario: {Shedule}</h5>
                                </div>

                            </div>
                            <hr className="text-danger"/>
                        </div>
                    </div>


                );
            }else{
                return <div></div>
            }

        }
    );
}



class ShowServicesComponent extends Component{


    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <GetAllServices Vehicle_type={localStorage.getItem("vehicle_type")} />
                </div>

            </div>
        );
    }
}

export default ShowServicesComponent;
