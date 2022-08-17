import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportProfileCard from "../components/TransportService/Profile/TransportProfileCard";
import TransportReview from "../components/TransportService/Profile/TransportReview";
import TransportVehicle from "../components/TransportService/Profile/TransportVehicle";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";


const TransportProviderProfile = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
            <div className="d-flex flex-column tg-page">
                <TransportServiceNavBar />
                <div className="d-flex flex-row tp-profile">
                    <TransportProfileCard />
                    <TransportVehicle />
                </div>
                <TransportReview />
            </div>

        </div>
    );
}

export default TransportProviderProfile;

