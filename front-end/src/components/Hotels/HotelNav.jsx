import React from "react";
import hotelinfo from "./hotelnav.css";

const HotelNav = () => {
    return (
        <div>
            <div className="d-flex flex-column right-side">
                <div className="btn-group w-100 mb-2">
                    <button className="btn btn-info font-weight-bold w-25 header2">Hotel Info & Price</button>
                    <button className="btn btn-info font-weight-bold w-25 header2">Facilities</button>
                    <button className="btn btn-info font-weight-bold w-25 header2">Hotel Rules</button>
                    <button className="btn btn-info font-weight-bold w-25">Guest Reviews</button>
                </div>
            </div>
        </div>
    );
}

export default HotelNav;