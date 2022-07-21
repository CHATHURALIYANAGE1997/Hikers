import React from "react";
import Navbar from "../components/Navbar/Navbar"
import "../Styles/landingPage.css"
import WelcomeHikers from "../components/WelcomeHikers/welcomeHikers";
// import Navbar from "../components/Navbar/Navbar";

const LandingPage = () => {
    return (
        <div>
            <Navbar/>
            <WelcomeHikers>
                <h3></h3>
            </WelcomeHikers>
        </div>
    )
}
export default LandingPage