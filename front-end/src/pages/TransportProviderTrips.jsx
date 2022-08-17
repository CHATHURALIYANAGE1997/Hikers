import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";
import TransportTrips from "../components/TransportService/Trips/TransportTrips";


const TransportProviderTrip = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
            <div className="d-flex flex-row tg-page">
                <TransportServiceNavBar />
                <div className="d-flex flex-column tg-profile">
                    <TransportTrips />       
                </div>
            </div>

        </div>
    );
}

export default TransportProviderTrip;

