import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./home";
import FirstServiceComponent from "../components/first/FirstServiceComponent";
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

const DriverRoute = (props)=>{
    if (isAuthenticated() && localStorage.getItem("user_type")=="driver"){
        return <Route {...props} />
    }else if(isAuthenticated() && !(localStorage.getItem("user_type")=="driver")){
        alert("No está autenticado como driver");
        return <Redirect to="/home" />
    }else if(!isAuthenticated()){
        alert("No está autenticado en la aplicación");
        return <Redirect to="/home" />
    }
}

const CompanyRoute = (props)=>{
    if (isAuthenticated() && localStorage.getItem("user_type")=="company"){
        return <Route {...props} />
    }else if(isAuthenticated() && !(localStorage.getItem("user_type")=="company")){
        alert("No está autenticado como company");
        return <Redirect to="/home" />
    }else if(!isAuthenticated()){
        alert("No está autenticado en la aplicación");
        return <Redirect to="/home" />
    }
}

const HomeRoute = (props)=>{
    if (isAuthenticated()){

        if(localStorage.getItem("user_type")=="company"){
            alert("No puedes acceder al home porque estás autenticado como company");
            return <Redirect to="/company_index" />
        }else if(localStorage.getItem("user_type")=="driver"){
            alert("No puedes acceder al home porque estás autenticado como driver");
            return <Redirect to="/driver_index" />
        }else{
            alert("No puedes acceder al home porque estás autenticado NI DRIVER NI COMPANY :o");
            return <Redirect to="/" />
        }

    }else{
        return <Route {...props} />
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
                        <Switch>
                            <HomeRoute path="/home">
                                <HomeNavbar/>
                            </HomeRoute>
                            <CompanyRoute path="/firstService" >
                                <SimpleNavbar/>
                            </CompanyRoute>
                            <DriverRoute path="/firstVehicle">
                                <SimpleNavbar/>
                            </DriverRoute>
                            <DriverRoute path="/driver_index">
                                <DriverNavbar/>
                            </DriverRoute>
                            <CompanyRoute path="/company_index">
                                <CompanyNavbar/>
                            </CompanyRoute>
                            <DriverRoute path="/driver_profile">
                                <DriverNavbar/>
                            </DriverRoute>
                            <CompanyRoute path="/company_profile">
                                <CompanyNavbar/>
                            </CompanyRoute>
                        </Switch>
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