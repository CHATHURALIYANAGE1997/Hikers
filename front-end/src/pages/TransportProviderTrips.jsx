import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";
import TransportTrips from "../components/TransportService/Trips/TransportTrips";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import TransporterHeader from "../components/TransportService/TransporterHeader/TransporterHeader";
import NotFoundPage from "./NotFoundPage";

const TransportProviderTrip = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Traprovider") {
        return (
            <div className="d-flex flex-column tg-container">
                <TransporterHeader />
                <div className="d-flex flex-row tg-page">
                    <TransportServiceNavBar />
                    <div className="d-flex flex-column tg-profile">
                        <h4>Trip Requests</h4>
                        <TransportTrips />
                    </div>
                </div>

            </div>
        );
    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        {return <div><NotFoundPage/></div>}

    }
}

export default TransportProviderTrip;

