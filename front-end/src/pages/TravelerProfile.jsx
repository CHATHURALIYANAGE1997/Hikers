import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TripHistory from "../components/TransportService/TripHistory/TripHistory";
import TravelerProfileCard from "../components/Traveler/Profile/TravelerProfileCard";
import TravelerProfileDetails from "../components/Traveler/Profile/TravelerProfileDetails";
import TravelerNav from "../components/Traveler/TravelerNavBar/TravelerNav";


const TravelerProfile = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
            <div className="d-flex flex-row tg-page">
                <TravelerNav />
                <div className="d-flex flex-column tg-profile">
                    <div className="d-flex flex-row ">
                        <TravelerProfileCard />
                        <TravelerProfileDetails />
                    </div>
                    <div className="d-flex flex-column tp-reviews">
                        <h4 className="trip-history-title">Trip History</h4>
                        <TripHistory />
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default TravelerProfile;

