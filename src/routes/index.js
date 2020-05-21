// using ES6 modules
import React from 'react';
import { 
    BrowserRouter as
    Router, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';


//CUSTOMS IMPORTS
import '../css/main.css';

import Home from './home';
import HomeNavbarComponent from "../components/navbar/HomeNavbarComponent";
import SimpleNavbarComponent from "../components/navbar/SimpleNavbarComponent";
import CompanyNavbarComponent from "../components/navbar/CompanyNavbarComponent";
import DriverNavbarComponent from "../components/navbar/DriverNavbarComponent";
//*/
//import { render } from 'react-dom';




export default ()=>(
<Router>
    <div className="row">
        <div className="col-md-12 p-0">
            <Switch className="justify-content-end bg-dark mr-3">
                <Route path="/" exact component={HomeNavbarComponent}/>
                <Route path="/companynavbar" exact component={CompanyNavbarComponent}/>
                <Route path="/drivernavbar" exact component={DriverNavbarComponent}/>
                <Route path="/simplenavbar" exact component={SimpleNavbarComponent}/>
            </Switch>
        </div>

    </div>
    <div className="row">
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
    </div>

</Router>
 
)

