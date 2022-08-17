import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportToday from "../components/TransportService/Calendar/TransportToday";
import TransportUpcoming from "../components/TransportService/Calendar/TransportUpcoming";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";


const TransportProviderCalendar = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
            <div className="d-flex flex-row tg-page">
                <TransportServiceNavBar />
                <div className="d-flex flex-column tg-profile">
                    <div className="d-flex flex-row w-100">
                        <TransportToday />
                    </div>
                    <TransportUpcoming />
                </div>
            </div>

        </div>
    );
}

export default TransportProviderCalendar;

