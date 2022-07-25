import React from "react";
import BookingDetails from "../components/Hotels/BookingDetails";
import DetailsForm from "../components/Hotels/DetailsForm";
import Price from "../components/Hotels/Price";
import Navbar from "../components/Navbar/Navbar";



const HotelBooking = () => {
    return (
        <div>
        <Navbar />
        <div class="p-5 mt-3 text-left container">
            <h2 className="mb-3 title font-weight-bold hotel-name">The Epitome</h2>
            <div className="d-flex flex-row hf-page-container">
                <div className="d-flex flex-column hf-left-side">
                    <BookingDetails/>
                    <Price/>
                </div>
                <div className=" d-flex flex-column hf-right-side">
                    <DetailsForm/>
                </div>
            </div>
        </div>
    </div>
    );
}

export default HotelBooking;