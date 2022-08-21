import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportPayments from "../components/TransportService/Payments/TransportPayments";
import TransportTotalProfit from "../components/TransportService/Payments/TransportTotalProfit";
import TransportTotalTravels from "../components/TransportService/Payments/TransportTotalTravels";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import TransporterHeader from "../components/TransportService/TransporterHeader/TransporterHeader";


const TransportProviderPaymemts = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Traprovider") {
        return (
            <div className="d-flex flex-column tg-container">
                <TransporterHeader />
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
    else {
        localStorage.clear();
        return props.history.push("/");
    }
}

export default TransportProviderPaymemts;

