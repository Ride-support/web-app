// using ES6 modules
import React from 'react';
import { 
    BrowserRouter as
    Router, Route, Switch} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';


//CUSTOMS IMPORTS
import '../css/main.css';

import Home from './home';

//*/
//import { render } from 'react-dom';




export default ()=>(
<Router>
    <Switch>
    <Route path="/" exact component={Home}/>
   
    
    </Switch>
</Router>
 
)

