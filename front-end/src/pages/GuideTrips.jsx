import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import TripRequest from "../components/Guide/Trips/TripRequest";
import Navbar from "../components/Navbar/Navbar";


const GuideTrips = () => {
    return (
        <div className="d-flex flex-column tg-container">
        <Navbar />
        <div className="d-flex flex-row tg-page">
            <GuideNav />
            <div className="d-flex flex-column gt-request">
                   <TripRequest />
            </div>
        </div>

    </div>
    );
}

export default GuideTrips;