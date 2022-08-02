import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import Navbar from "../components/Navbar/Navbar";


const TravelingGuide = () => {
    return (
        <div className="d-flex flex-column">
            <Navbar />
            <GuideNav />
        </div>
    );
}

export default TravelingGuide;

//Install material ui
//npm install @material-ui/core
//npm install @material-ui/icons
