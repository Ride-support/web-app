import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaCar } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon";


const styles={
    div: {
        backgroundImage: "url(" + "images/HomeBackground.jpg" + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat'

    },
    inline:{
        display: "inline-block"
    }
}

export default () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand pl-5" href="/driver_index">
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
                                    <h6 style={styles.inline} className="font-weight-bold mt-2">{localStorage.getItem("name")}</h6>

                                    <Icon style={styles.inline} name="car"  className="ml-1 text-dark " size="large"/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/driver_profile">
                                        <div className="d-flex justify-content-end">
                                            <h5 style={styles.inline} >Editar perfil conductor</h5>
                                            <Icon style={styles.inline} name="edit"  size="large"/>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="/home" onClick={()=>{
                                            localStorage.removeItem("user_type");
                                            localStorage.removeItem("id");
                                            localStorage.removeItem("token");
                                            localStorage.removeItem("name");
                                            localStorage.removeItem("vehicle_type");
                                        }
                                    }
                                    >
                                        <div className="d-flex justify-content-end">
                                            <h5 style={styles.inline} >Log out</h5>
                                            <Icon style={styles.inline} name="sign-out"  className="text-dark " size="large"/>
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}