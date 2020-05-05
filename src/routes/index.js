// using ES6 modules
import React from 'react';
import { 
    BrowserRouter as
    Router, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';


//CUSTOMS IMPORTS
import '../css/main.css';

import Home from './home';
//import RegisterComponent from '../components/register/RegisterComponent';
//<Route path="/register" exact component={RegisterComponent}>*/
//import { render } from 'react-dom';




export default ()=>(
<Router>
    <Switch>
    <Route path="/" exact component={Home}/>
    
    </Switch>
</Router>
 
)

