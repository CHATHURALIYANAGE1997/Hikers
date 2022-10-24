import React from "react";
import "./hotelinfo.css";
import { Link } from "react-router-dom";
import HotelName from "./HotelName";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import authToken from "../../utils/authToken";

const PreviousData = () => {

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "User") {

    const accessToken = localStorage.jwtToken;

    var d1 = new Date(localStorage.getItem("checkin"));   
    var d2 = new Date(localStorage.getItem("checkout"));   
        
    var diff = d2.getTime() - d1.getTime();   
        
    var daydiff = diff / (1000 * 60 * 60 * 24);   

    return (
        <>
            <div className="d-flex flex-row hr-info">
                <div className="d-flex flex-column hr-data">
                    <span>Province</span>
                    <div className="bg-white p-1">{localStorage.getItem("travel_province")}</div>
                </div>
                <div className="d-flex flex-column hr-data">
                    <span>Check-In date</span>
                    <div className="bg-white p-1">{localStorage.getItem("checkin")}</div>
                </div>
                <div className="d-flex flex-column hr-data">
                    <span>Check-Out date</span>
                    <div className="bg-white p-1">{localStorage.getItem("checkout")}</div>
                </div>
                <div className="d-flex flex-column">
                    <span>{daydiff}-Night stay</span>
                    <div className="d-flex flex-row bg-white p-1"><span className="hr-nights">{localStorage.getItem("crowd")}</span></div>
                </div>
            </div>

        </>
    );
    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        { return <div><NotFoundPage /></div> }

    }
}

export default PreviousData;