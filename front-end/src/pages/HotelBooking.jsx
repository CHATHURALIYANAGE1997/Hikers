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

                    <div class="md-stepper-horizontal orange">
                        <div class="md-step active done">
                            <div class="md-step-circle"><span>1</span></div>
                            <div class="md-step-title">Trip Package</div>
                            <div class="md-step-bar-left"></div>
                            <div class="md-step-bar-right"></div>
                        </div>
                        <div class="md-step active editable green">
                            <div class="md-step-circle"><span>2</span></div>
                            <div class="md-step-title">Hotel</div>
                            <div class="md-step-optional">Optional</div>
                            <div class="md-step-bar-left"></div>
                            <div class="md-step-bar-right"></div>
                        </div>
                        <div class="md-step">
                            <div class="md-step-circle"><span>3</span></div>
                            <div class="md-step-title">Transport Service</div>
                            <div class="md-step-optional">Optional</div>
                            <div class="md-step-bar-left"></div>
                            <div class="md-step-bar-right"></div>
                        </div>
                        <div class="md-step">
                            <div class="md-step-circle"><span>4</span></div>
                            <div class="md-step-title">Payment</div>
                            <div class="md-step-bar-left"></div>
                            <div class="md-step-bar-right"></div>
                        </div>
                    </div>

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
        { return <div><NotFoundPage /></div> }

    }
}

export default HotelBooking;