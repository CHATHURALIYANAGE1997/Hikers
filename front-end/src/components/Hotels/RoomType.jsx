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
import NotFoundPage from "../../pages/NotFoundPage";


const RoomType = (props) => {


    const hotel_id = localStorage.getItem("hotelid");
    //console.log(hotel_id);

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "User") {

        const accessToken = localStorage.jwtToken;

        const [room, setRoom] = useState('');

        const url2 = 'http://localhost:8080/hotel/getRoom';

        useEffect(() => {
            getRooms();
        }, []);

        const getRooms = () => {
            axios.get(url2, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allRooms = response.data;
                setRoom(allRooms);
                console.log(allRooms);
            }).catch((error) => {
                console.log(error);
            })
        }

        const initialState = {
            singleroom: "",
            doubleroom: "",
            trippleroom: ""
        };

        const [hike, setHike] = useState(initialState);

        const credentialChange = (event) => {
            const { name, value } = event.target;
            setHike({ ...hike, [name]: value });
            localStorage.setItem("singleroom", hike.singleroom);
            localStorage.setItem("doubleromm", hike.doubleroom);
            localStorage.setItem("tripplerom", hike.trippleroom);  
            console.log(hike);      
        }

        console.log(hike);

        const displayDetails = (props) => {
            if (room.length > 0) {
                return (
                    room.map((room, index) => {
                        if (room.hotelid == hotel_id) {
                            let beds = "01 Single Bed";
                            let bedcount = 1;
                            if (room.sleeps == 2) {
                                beds = "01 Double Bed";
                            } else if (room.sleeps == 3) {
                                beds = "01 Single Bed + 01 Dpuble Bed";
                            }
                            if (room.roomtype == 'Single room') {
                                localStorage.setItem("signleprice", room.amount);
                                return (
                                    <tr>
                                        <td>
                                            <div className="bed-type text-capitalize">{room.roomtype}</div>
                                            <div className="d-flex flex-column">
                                                <span className="r-facility">{beds}</span>
                                                <span className="r-facility">{room.facility}</span>
                                                <span className="r-facility">{room.food} included</span>
                                                <span className="r-facility">Room size : {room.size_length}m x {room.size_width}m</span>
                                            </div>
                                        </td>
                                        <td>{bedcount}</td>
                                        <td >
                                            <div className="d-flex flex-column">
                                                <span className="r-price">LKR {room.amount}</span>
                                                <span className="r-facility">+ 10% Taxes and charges</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <input type="number" value={hike.singleroom} onChange={credentialChange} min="0" max="6" className="rooms" name="singleroom" defaultValue="0"></input>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                            else if (room.roomtype == 'Double room') {
                                bedcount = 1;
                                localStorage.setItem("doubleprice", room.amount);
                                beds = "01 Double bed";
                                return (
                                    <tr>
                                        <td>
                                            <div className="bed-type text-capitalize">{room.roomtype}</div>
                                            <div className="d-flex flex-column">
                                                <span className="r-facility">{beds}</span>
                                                <span className="r-facility">{room.facility}</span>
                                                <span className="r-facility">{room.food} included</span>
                                                <span className="r-facility">Room size : {room.size_length}m x {room.size_width}m</span>
                                            </div>
                                        </td>
                                        <td>2</td>
                                        <td >
                                            <div className="d-flex flex-column">
                                                <span className="r-price">LKR {room.amount}</span>
                                                <span className="r-facility">+ 10% Taxes and charges</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <input type="number" value={hike.doubleroom} onChange={credentialChange} min="0" max="6" className="rooms" name="doubleroom" defaultValue="0"></input>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            } else if (room.roomtype == 'Triple room') {
                                bedcount = 2;
                                localStorage.setItem("trippleprice", room.amount);
                                beds = "01 Single bed + 01 Double bed220000000000000000000000000"
                                return (
                                    <tr>
                                        <td>
                                            <div className="bed-type text-capitalize">{room.roomtype}</div>
                                            <div className="d-flex flex-column">
                                                <span className="r-facility">{beds}</span>
                                                <span className="r-facility">{room.facility}</span>
                                                <span className="r-facility">{room.food} included</span>
                                                <span className="r-facility">Room size : {room.size_length}m x {room.size_width}m</span>
                                            </div>
                                        </td>
                                        <td>3</td>
                                        <td >
                                            <div className="d-flex flex-column">
                                                <span className="r-price">LKR {room.amount}</span>
                                                <span className="r-facility">+ 10% Taxes and charges</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <input type="number" value={hike.trippleroom} onChange={credentialChange} min="0" max="6" className="rooms" name="trippleroom" defaultValue="0"></input>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }

                        }
                    }
                    )
                )
            }
        }

        return (
            <>
                {displayDetails(props)}
            </>
        )
    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        { return <div><NotFoundPage /></div> }

    }
}

export default RoomType;