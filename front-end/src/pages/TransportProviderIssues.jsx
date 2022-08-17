import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportIssues from "../components/TransportService/Issues/TransportIssues";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";


const TransportProviderIssues = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
            <div className="d-flex flex-column tg-page">
                <TransportServiceNavBar />
                <div className="d-flex flex-row tp-profile">
                    <TransportIssues />
                </div>
            </div>
        </div>
    );
}

export default TransportProviderIssues;

