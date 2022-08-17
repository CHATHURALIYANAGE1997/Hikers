import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";
import TripHistory from "../components/TransportService/TripHistory/TripHistory";


const TransportProviderTripHistory = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
            <div className="d-flex flex-column tg-page">
                <TransportServiceNavBar />
                <div className="d-flex flex-row tp-profile">
                    <TripHistory />
                </div>
            </div>
        </div>
    );
}

export default TransportProviderTripHistory;

