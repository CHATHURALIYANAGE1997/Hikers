import React from "react";
import "./bookingdetails.css";

const BookingDetails = () => {
    return (
        <div>
            <div className="d-flex flex-column bg-light p-3 mt-4 bd-booking-details">
                <h5 className="mb-3">Your booking details</h5>
                <div className="d-flex flex-row mb-3 justify-content-center">
                    <div className="d-flex flex-column mr-3">
                        <h6 className="pb-2">Check-in</h6>
                        <h7>Thu 14 2022</h7>
                        <h7>12:00 - 20:00</h7>
                    </div>
                    <div className="d-flex flex-column ml-3">
                        <h6 className="pb-2">Check-out</h6>
                        <h7>Sat 17 2022</h7>
                        <h7>05:00 - 13:00</h7>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div className="w-50 mr-3">
                        You select
                        <h6 className="font-weight-bold">Standard double room x 02</h6>
                        <h6 className="font-weight-bold">Standard single room x 01</h6>
                    </div>
                    <div className="w-50">
                        Total length of stay : 3 nights
                    </div>
                </div>
                <h7>No smoking</h7>
                <h7>25m^2</h7>
                <a href="/hotel"><h7 className="bd-change"><u>Change your selection</u></h7></a>
            </div>
        </div>
    );
}

export default BookingDetails;