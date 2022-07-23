import React from "react";
// import Navbar from "../components/Navbar/Navbar"
import "../Styles/landingPage.css"
import WelcomeHikers from "../components/WelcomeHikers/welcomeHikers";
import Navbar from "../components/Navbar/Navbar";
// import PreSignNavBar from "../components/PreSignNavBar/PreSignNavBar";

const LandingPage = () => {
    return (
        <div>
            {/* <Navbar/> */}
            {/* <PreSignNavBar/> */}
            <WelcomeHikers>
                <h3></h3>
            </WelcomeHikers>
        </div>
    )
}
export default LandingPage