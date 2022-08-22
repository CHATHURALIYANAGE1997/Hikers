import React from "react";
import { Component } from "react";
import "../../Styles/welcomeHikers.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

import hiker from "../../images/OIP.jpg";

class WelcomeHikers extends Component {
    render() {
        return (
            <div className="d-flex flex-row w-100 h-100">
                <div className="w-50 h-100">
                    <img src={hiker} className="w-100 h-100" alt="Background Picture"></img>
                </div>
                <div className="welcomeDiv w-50">
                    <h1 className="welcomeNote">Welcome to HIKERS</h1>
                    <br />
                    <Link to={"/organize"}>
                        <button type="button" class="btn btn-outline-primary welcome-btn">Let's Travel</button>
                    </Link>
                </div>
            </div>
        )
    }
}
export default WelcomeHikers