import React, {Component} from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaCar } from 'react-icons/fa';
import { IconContext } from "react-icons";

class CompanyNavbarComponent extends Component{
    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <a className="navbar-brand pl-5" href="#">
                        <div className="row">
                            <IconContext.Provider value={{ color: "red", size: "2em" }} >
                                <FaCar/>
                            </IconContext.Provider>
                            <h3 className="font-italic text-warning pt-1">Ride-Support</h3>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active mx-5">
                                <Dropdown>
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                        [USER_NAME]
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Editar Perfil Empresa</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-2">Log out </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default CompanyNavbarComponent;