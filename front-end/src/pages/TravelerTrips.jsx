import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TravelerNav from "../components/Traveler/TravelerNavBar/TravelerNav";
import TodayTrips from "../components/Traveler/Trips/TodayTrips";
import UpcomingTrips from "../components/Traveler/Trips/UpcomingTrips";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";


const TravelerTrips = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "User") {
        return (
            <div className="d-flex flex-column tg-container">
                <Navbar />
                <div className="d-flex flex-row tg-page">
                    <TravelerNav />
                    <div className="d-flex flex-column gs-schedule">
                        <TodayTrips />
                        <div className="d-flex flex-row gs-upcoming">
                            <UpcomingTrips />
                            <UpcomingTrips />
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

export default TravelerTrips;