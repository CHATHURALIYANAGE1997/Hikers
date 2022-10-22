import React from "react";
import { useSelector } from "react-redux";
import UpcomingBooking from "../components/Hotels/HotelActor/HotelBooking/UpcomingBooking";
import HotelHeader from "../components/Hotels/HotelActor/HotelHeader/HotelHeader";
import HotelNav from "../components/Hotels/HotelActor/HotelNav/HotelNav";
import HotelName from "../components/Hotels/HotelName";
import authToken from "../utils/authToken";
import NotFoundPage from "./NotFoundPage";

const HotelUpcomingBooking = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Hotel") {
        return (
            <div className="d-flex flex-column tg-container">
                <HotelHeader />
                <div className="d-flex flex-column tg-page">
                    <HotelNav />
                    <div className="d-flex flex-column tg-profile">
                        <UpcomingBooking />
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

export default HotelUpcomingBooking;

