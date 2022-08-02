import React from "react"
import "./navbar.css"
import logo from "../images/logo.png";
import { NavBarData } from './NavBarData';



const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top nb-container">
                {/* <a class="navbar-brand" href='http://localhost:3001'>
                    <div class="logo"></div>
                </a> */}
                <a class="navbar-brand" href="#">
                    <img src={logo} className="logo" alt="" width="70" height="40" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav navbar-ul">
                        {NavBarData.map((val, key) => {
                            return (
                                <li key={key}
                                    className="nb-list"
                                    id={window.location.pathname == val.link ? "active" : ""}
                                    onClick={() => { window.location.pathname = val.link }}>
                                    <div className="nb-title">
                                        {val.title}
                                    </div>
                                </li>
                            );
                        })}

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbar-list-4">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="30" height="30" class="rounded-circle"></img>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Dashboard</a>
                                        <a class="dropdown-item" href="#">Edit Profile</a>
                                        <a class="dropdown-item" href="#">Log Out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </ul>
                </div>
            </nav >
        </div >
    );
}

export default Navbar;