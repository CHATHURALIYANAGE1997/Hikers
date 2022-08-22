import React from "react";
import BookingDetails from "../components/Hotels/BookingDetails";
import DetailsForm from "../components/Hotels/DetailsForm";
import Price from "../components/Hotels/Price";
import Navbar from "../components/Navbar/Navbar";
import "../components/Hotels/bookingdetails.css";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import NotFoundPage from "./NotFoundPage";


const HotelBooking = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "User") {
        return (
            <div>
                <Navbar />
                <div class="p-5 mt-3 text-left container">
                    <h2 className="mb-3 title font-weight-bold hotel-name">The Epitome</h2>
                    <div className="d-flex flex-row hf-page-container">
                        <div className="d-flex flex-column hf-left-side">
                            <BookingDetails />
                            <Price />
                        </div>
                        <div className=" d-flex flex-column hb-right-side">
                            <DetailsForm />
                        </div>
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

export default HotelBooking;