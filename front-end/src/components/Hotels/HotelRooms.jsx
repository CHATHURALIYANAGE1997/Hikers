import React from "react";
import "./hotelinfo.css";
import { Link } from "react-router-dom";
import HotelName from "./HotelName";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import authToken from "../../utils/authToken";
import PreviousData from "./PreviousData";
import RoomType from "./RoomType";
import NotFoundPage from "../../pages/NotFoundPage";

const HotelRooms = () => {

    const hotel_id = localStorage.getItem("hotelid");

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "User") {

    
    return (
        <>

           
            <div className="text-left hr-container w-100">

                <div className="d-flex flex-column">
                    <PreviousData />
                    <div className=" d-flex flex-column hr-right-side">
                        <div className="d-flex flex-column w-100">
                            <table className="table table-hover align-middle mb-0 ">
                                <thead class="t-head">
                                    <th scope="col">Room type</th>
                                    <th scope="col">Sleeps</th>
                                    <th scope="col">Price of the room</th>
                                    <th scope="col">Rooms</th>
                                </thead>
                                <tbody>
                                   <RoomType />
                                </tbody>
                            </table>
                            <div className="d-flex hr-reserve">
                                <Link to={"/reserve"}><button className="btn btn-primary hr-reserve-btn">Reserve</button></Link>
                            </div>
                        </div>

                    </div>
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

export default HotelRooms;