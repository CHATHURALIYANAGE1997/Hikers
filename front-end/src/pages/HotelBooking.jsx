import React, { useState } from "react";
import BookingDetails from "../components/Hotels/BookingDetails";
import DetailsForm from "../components/Hotels/DetailsForm";
import Price from "../components/Hotels/Price";
import Navbar from "../components/Navbar/Navbar";
import "../components/Hotels/bookingdetails.css";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import NotFoundPage from "./NotFoundPage";
import HotelName from "../components/Hotels/HotelName";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'



const HotelBooking = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    const hotelid = localStorage.getItem("hotel_id");
    const crowd = localStorage.getItem("crowd");
    const checkin = localStorage.getItem("checkin");
    const checkout = localStorage.getItem("checkout");

    console.log(localStorage.getItem("singleroom"));
    console.log(localStorage.getItem("doubleromm"));
    console.log(localStorage.getItem("tripplerom"));

    const single = localStorage.getItem("singleroom");
    const double = localStorage.getItem("doubleroom");
    const triple = localStorage.getItem("tripleroom");

    const price = single * 13500 + double * 20500 + triple * 42000;

    localStorage.setItem("price", price);

    const initialState = {
        hotelid: hotelid,
        crow: crowd,
        single: single,
        double: double,
        triple: triple,
        payment: price,
        checkindate: checkin,
        checkoutdate: checkout,
    };

    const [book, setBook] = useState(initialState);


    const dispatch = useDispatch();

    const addBooking = () => {
        const api = 'http://localhost:8080/hotel/hotelbooking';
        const token = localStorage.jwtToken;
        axios.post(api, book, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            console.log(response);
            resetLoginForm();
            console.log("ök");
            console.log(book);
        }).catch((error) => {
            console.log(error.message);
            resetLoginForm();
            console.log("not ok");
        })
    };
    const resetLoginForm = () => {
        setBook(initialState);
    };

    // if (auth.isLoggedIn === true && auth.role === "User") {
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

                <HotelName name={localStorage.getItem("hotelname")} />
                <div className="d-flex flex-row hf-page-container">
                    <div className="d-flex flex-column hf-left-side">
                        <BookingDetails />
                        <Price />
                    </div>
                    <div className=" d-flex flex-column hb-right-side">
                        <div>
                            <div className="d-flex flex-column pt-4 pb-4  pl-5 pr-5  df-form-details">
                                <form>
                                    <div class="form-group df-special">
                                        <label for="inputSpecialrequest">Special request</label>
                                        <label className="df-notice">Special requests can’t be guaranteed - but propert will do its best to meet your needs You can
                                            always  make a special request after your booking is completed</label>
                                        <input type="text" class="form-control" id="inputSpecialrequest"></input>
                                    </div>

                                    <div class="form-row df-row">
                                        <div class="form-group w-50 df-column">
                                            <label for="inputArrivaltime">Your arrival time</label>
                                            <label className="df-notice">Add your estimated arrival time</label>
                                            <select id="inputState" class="form-control">
                                                <option selected>Choose...</option>
                                                <option>12:00</option>
                                                <option>13:00</option>
                                                <option>14:00</option>
                                                <option>15:00</option>
                                                <option>16:00</option>
                                                <option>17:00</option>
                                                <option>18:00</option>
                                                <option>19:00</option>
                                                <option>20:00</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Link to={"/transport"}>
                                        <button type="button" type="submit" onClick={addBooking} class="btn btn-primary df-booking-btn"><FontAwesomeIcon icon={faLock} /><span className="df-icon">Complete booking</span></button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    // }
    // else {
    //     localStorage.clear();
    //     // return props.history.push("/");
    //     { return <div><NotFoundPage /></div> }

    // }
}

export default HotelBooking;