import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TicketRise from "../components/Traveler/Issues/TicketRise";
import TravelerNav from "../components/Traveler/TravelerNavBar/TravelerNav";


const TravelerIssues = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
            <div className="d-flex flex-column tg-page">
                <TravelerNav />
                <div className="d-flex flex-row tp-profile">
                    <TicketRise />
                </div>
            </div>
        </div>
    );
}

export default TravelerIssues;

