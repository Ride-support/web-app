import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { FaCar } from 'react-icons/fa';
import { IconContext } from "react-icons";

class HomeNavbarComponent extends Component{
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
                                <a className="nav-link text-danger" href="#">Busca Servicios <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <Button variant="warning">Log in</Button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default HomeNavbarComponent;