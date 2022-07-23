import React from "react";
import hotelinfo from "./hotelnav.css";

const HotelNav = () => {
    return (

        <div className="d-flex flew-row w-100 mb-2">
            <div className="w-25 hn-bg">Hotel Info & Price</div>
            <div className="w-25 hn-bg">Facilities</div>
            <div className="w-25 hn-bg">Hotel Rules</div>
            <div className="w-25 hn-bg2">Guest Reviews</div>
        </div>

    );
}

export default HotelNav;