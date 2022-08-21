import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TravelerNav from "../components/Traveler/TravelerNavBar/TravelerNav";
import TodayTrips from "../components/Traveler/Trips/TodayTrips";
import UpcomingTrips from "../components/Traveler/Trips/UpcomingTrips";

const TravelerTrips = () => {
    return (
        <div className="d-flex flex-column tg-container">
        <Navbar />
        <div className="d-flex flex-row tg-page">
            <TravelerNav />
            <div className="d-flex flex-column gs-schedule">
                <TodayTrips />
                <div className="d-flex flex-row gs-upcoming">
                    <UpcomingTrips />
                    <UpcomingTrips />   
                </div>
                 
            </div>
        </div>

    </div>
    );
}

export default TravelerTrips;