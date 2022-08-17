import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportPayments from "../components/TransportService/Payments/TransportPayments";
import TransportTotalProfit from "../components/TransportService/Payments/TransportTotalProfit";
import TransportTotalTravels from "../components/TransportService/Payments/TransportTotalTravels";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";


const TransportProviderPaymemts = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
            <div className="d-flex flex-column tg-page">
                <TransportServiceNavBar />
                <div className="d-flex flex-column tp-profile">
                    <div className="d-flex flex-row justify-content-between">
                        <TransportTotalTravels />
                        <TransportTotalProfit />
                    </div>
                    <div>
                        <TransportPayments />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransportProviderPaymemts;

