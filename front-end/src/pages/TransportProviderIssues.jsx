import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportIssues from "../components/TransportService/Issues/TransportIssues";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import TransporterHeader from "../components/TransportService/TransporterHeader/TransporterHeader";


const TransportProviderIssues = (props) => {

    // if (localStorage.jwtToken) {
    //     authToken(localStorage.jwtToken);
    // }

    // const auth = useSelector((state) => state.auth);

    // if (auth.isLoggedIn === true && auth.role === "Traprovider") {
        return (
            <div className="d-flex flex-column tg-container">
                <TransporterHeader />
                <div className="d-flex flex-column tg-page">
                    <TransportServiceNavBar />
                    <div className="d-flex flex-row tp-profile">
                        <TransportIssues />
                    </div>
                </div>
            </div>
        );
    // }
    // else {
    //     localStorage.clear();
    //     return props.history.push("/");
    // }
}

export default TransportProviderIssues;

