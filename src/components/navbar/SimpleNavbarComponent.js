import React, {Component} from 'react';
import { FaCar } from 'react-icons/fa';
import { IconContext } from "react-icons";

class SimpleNavbarComponent extends Component{
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
                </nav>
            </div>
        );
    }
}

export default SimpleNavbarComponent;