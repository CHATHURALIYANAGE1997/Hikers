import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../components/Hotels/hotels.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { getDatasetAtEvent } from "react-chartjs-2";
import NotFoundPage from "./NotFoundPage";
import whitehouse from "../components/Hotels/Whitehouse.jfif";
import epitome from "../components/Hotels/Theepitome.jfif";
import araliya from "../components/Hotels/Arliyavilla.jfif";
import HotelCard from "../components/Hotels/HotelCard";
// import axios from 'axios';

export default function Parent (props) {
// const Hotels = (props) => {

    // const accessToken = localStorage.jwtToken;

    // if (localStorage.jwtToken) {
    //     authToken(localStorage.jwtToken);
    // }

    // const auth = useSelector((state) => state.auth);

    // if (auth.isLoggedIn === true && auth.role === "User") {

    const accessToken = localStorage.jwtToken;

    const [notes, getNotes] = useState('');

    const url = 'http://localhost:8080/user/gethotels';

    useEffect(() => {
        getAllNotes();
    }, []);

    const getAllNotes = () => {
        axios.get(url, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allNotes = response.data;
            getNotes(allNotes);
            console.log(response.data[0]['name']);
            //console.log(response.data);
            console.log(allNotes);
        }).catch((error) => {
            console.log(error);
        })
    }


    return (



        <div>
            <Navbar />
            <div className="p-5 text-left container">
                <h2 className="mb-3 title hotel-name">North-Western Province: 3 properties found</h2>
                <div className="mb-4 d-flex flex-row justify-content-between">
                    <div className="text-light d-flex flex-column box">
                        <span className="pr-2 nb-text">Check-In</span>
                        <input type="date"></input>
                    </div>
                    <div className="text-light d-flex flex-column justify-content-center box">
                        <span className="nb-text">Check-Out</span>
                        <input type="date"></input>
                    </div>
                    <div className="text-light box d-flex flex-row justify-content-center r-div">
                        <label className="mt-auto mr-2 mb-auto r-label">Rooms</label>
                        <select className="rooms" name="room">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="text-light box d-flex flex-row g-div">
                        <div className="pr-2 mt-auto mb-auto mr-auto g-guest">Guests</div>
                        <div className="text-light mr-auto box d-flex flex-row justify-content-center r-label">
                            <label className="mt-auto mr-2 mb-auto r-label">Crowd</label>
                            <select className="rooms" name="room">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        {/* <label className="mt-auto mr-2 mb-auto r-label">Children</label>
                        <select className="rooms" name="room">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select> */}
                    </div>
                </div>

                <HotelCard notes={notes} />

            </div>
        </div>
    );
    // }
    // else {
    //     localStorage.clear();
    //     // return props.history.push("/");
    //     {return <div><NotFoundPage /></div>}

    // }
}

// export default Hotels;