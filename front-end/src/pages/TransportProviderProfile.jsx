import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportProfileCard from "../components/TransportService/Profile/TransportProfileCard";
import TransportReview from "../components/TransportService/Profile/TransportReview";
import TransportVehicle from "../components/TransportService/Profile/TransportVehicle";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import TransporterHeader from "../components/TransportService/TransporterHeader/TransporterHeader";
import NotFoundPage from "./NotFoundPage";

const TransportProviderProfile = (props) => {

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
                    <div className="d-flex flex-row tp-profile">
                        <TransportProfileCard />
                        <TransportVehicle />
                    </div>
                    <TransportReview />
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

export default TransportProviderProfile;

