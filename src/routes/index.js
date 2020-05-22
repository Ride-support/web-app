// using ES6 modules
import React from 'react';
import { 
    BrowserRouter as
    Router, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';


//CUSTOMS IMPORTS
import '../css/main.css';

import Home from './home';
import 'semantic-ui-css/semantic.min.css'
import NavbarComponent from "../components/navbar/NavbarComponent";
//*/
//import { render } from 'react-dom';




export default ()=>(
<Router fluid>
    <div className="row fixed-top">
        <div className="col-md-12 p-0">
            <NavbarComponent/>
        </div>

    </div>
    <div className="container-fluid p-0 mt-5">
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
    </div>

</Router>
 
)

