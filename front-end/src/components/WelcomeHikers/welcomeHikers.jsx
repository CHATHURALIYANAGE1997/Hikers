import React from "react";
import { Component } from "react";
import "../../Styles/welcomeHikers.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

class WelcomeHikers extends Component {
    render () {
        return (
            <div className="welcomeDiv">
                <h1 className="welcomeNote">Welcome to Hikers</h1>
                <br />  
                <button type="button" class="btn btn-outline-primary">Let's Travel</button>
            </div>
        )
    }
}
export default WelcomeHikers