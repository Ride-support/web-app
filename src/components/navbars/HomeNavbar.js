import React from 'react';
import { FaCar } from 'react-icons/fa';
import { FcSearch } from 'react-icons/fc';
import { IconContext } from "react-icons";
import LoginComponent from "../login/LoginComponent";

export default () => {
   return (
       <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
               <a className="navbar-brand pl-5" href="/home">
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

                       <li className="nav-item px-4">
                           <LoginComponent/>
                       </li>
                   </ul>
               </div>
           </nav>
       </div>
   );
}