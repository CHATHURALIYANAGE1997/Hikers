import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import TripRequest from "../components/Guide/Trips/TripRequest";
import Navbar from "../components/Navbar/Navbar";
import authToken from "../utils/authToken";
import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import GuideHeader from "../components/Guide/GuideHeader/GuideHeader";
const GuideTrips = (props) => {


    // if (localStorage.jwtToken) {
    //     authToken(localStorage.jwtToken);
    // }

    // const auth = useSelector((state) => state.auth);

    // // useEffect(() => {
    // //     if (auth.isLoggedIn === true && auth.role === "Travelguide") {
    // //         return propTypes.history.push("/guide/trips");
    // //     }
    // //     else {
    // //         localStorage.clear();
    // //         return props.history.push("/");
    // //     }
    // // }, []);

    // if (auth.isLoggedIn === true && auth.role === "Travelguide") {
        return (
            <div className="d-flex flex-column tg-container">
                <GuideHeader />
                <div className="d-flex flex-row tg-page">
                    <GuideNav />
                    <div className="d-flex flex-column gt-request">
                        <h4 >Trip Requests</h4>
                        <TripRequest />
                        <TripRequest />

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

export default GuideTrips;