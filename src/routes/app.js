import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./home";
import FirstServiceComponent from "../components/first/service/FirstServiceComponent";
import HomeNavbar from "../components/navbar/navbars/HomeNavbar";
import DriverNavbar from "../components/navbar/navbars/DriverNavbar";
import CompanyNavbar from "../components/navbar/navbars/CompanyNavbar";
import SimpleNavbar from "../components/navbar/navbars/SimpleNavbar";

class App extends Component{

    constructor(props) {
        super(props);
    }

    render(){

        return(
            <div>
                <div className="row fixed-top">
                    <div className="col-md-12 p-0">
                        <Route path="/home">
                            <HomeNavbar/>
                        </Route>
                        <Route path="/firstService">
                            <SimpleNavbar/>
                        </Route>
                        <Route path="/firstVehicle">
                            <SimpleNavbar/>
                        </Route>
                        <Route path="/driver_index">
                            <DriverNavbar/>
                        </Route>
                        <Route path="/company_index">
                            <CompanyNavbar/>
                        </Route>
                        <Route path="/driver_profile">
                            <DriverNavbar/>
                        </Route>
                        <Route path="/company_profile">
                            <CompanyNavbar/>
                        </Route>


                    </div>

                </div>
                <div className="container-fluid p-0 mt-5">
                    <Switch>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/firstService">
                            <FirstServiceComponent/>
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;