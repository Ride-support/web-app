import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./home";
import FirstServiceComponent from "../components/first/service/FirstServiceComponent";
import HomeNavbar from "../components/navbars/HomeNavbar";
import DriverNavbar from "../components/navbars/DriverNavbar";
import CompanyNavbar from "../components/navbars/CompanyNavbar";
import SimpleNavbar from "../components/navbars/SimpleNavbar";
import decode from 'jwt-decode';
import gql from 'graphql-tag';
import client from "../apollo";

const isAuthenticated = ()=>{
    const token = localStorage.getItem('token')
    let isValid = true
    try{
        isValid = decode(token);

    }catch(e){
        return false;
    }
    return isValid;
};

const MyRoute = (props)=>{
    if (isAuthenticated()){
        return <Route {...props} />
    }else{
        console.log("No está autenticado");
        return <Redirect to="/home" />
    }
}


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
                        <MyRoute path="/firstService" >

                            <SimpleNavbar/>
                        </MyRoute>
                        <MyRoute path="/firstVehicle">
                            <SimpleNavbar/>
                        </MyRoute>
                        <MyRoute path="/driver_index">
                            <DriverNavbar/>
                        </MyRoute>
                        <MyRoute path="/company_index">
                            <CompanyNavbar/>
                        </MyRoute>
                        <MyRoute path="/driver_profile">
                            <DriverNavbar/>
                        </MyRoute>
                        <MyRoute path="/company_profile">
                            <CompanyNavbar/>
                        </MyRoute>


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