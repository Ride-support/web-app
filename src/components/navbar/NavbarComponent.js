import React, {Component} from 'react';
import CompanyNavbar from "./navbars/CompanyNavbar";
import DriverNavbar from "./navbars/DriverNavbar";
import HomeNavbar from "./navbars/HomeNavbar";
import SimpleNavbar from "./navbars/SimpleNavbar";

class NavbarComponent extends Component{

    state ={
        showHome: true,
        showDriver: false,
        showCompany: false,
        showSimple: false
    }

    showHome = (ev)=>{
        ev.preventDefault();
        this.setState({
            showHome: true,
            showDriver:false,
            showCompany: false,
            showSimple: false
        });
    }

    showDriver = (ev)=>{
        ev.preventDefault();
        this.setState({
            showHome: true,
            showDriver:true,
            showCompany: false,
            showSimple: false
        });
    }

    showCompany = (ev)=>{
        ev.preventDefault();
        this.setState({
            showHome: false,
            showDriver:false,
            showCompany: true,
            showSimple: false
        });
    }

    showSimple = (ev)=>{
        ev.preventDefault();
        this.setState({
            showHome: false,
            showDriver:false,
            showCompany: false,
            showSimple: true
        });
    }


    render() {
        const {showHome,showDriver,showCompany,showSimple} = this.state;

        return(
            <div>
                {showHome && <HomeNavbar/>}
                {showDriver && <DriverNavbar/>}
                {showCompany && <CompanyNavbar/>}
                {showSimple && <SimpleNavbar/>}
            </div>
        )
    }
}

export default NavbarComponent;