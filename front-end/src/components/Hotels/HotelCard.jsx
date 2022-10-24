import React from "react";
import { Link } from "react-router-dom";
import araliya from "./Arliyavilla.jfif";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import authToken from "../../utils/authToken";
import { useSelector } from "react-redux";



export default function HotelCard(props) {
    const displayNotes = (props) => {

        const {user} = props;
        console.log(user);

        localStorage.setItem("checkin", user.checkin);
        localStorage.setItem("checkout", user.checkout);
        localStorage.setItem("crowd", user.crowd);

        localStorage.setItem("üser", user);

        if (localStorage.jwtToken) {
            authToken(localStorage.jwtToken);
        }
    
        const auth = useSelector((state) => state.auth);

        const accessToken = localStorage.jwtToken;

        const [notes, getNotes] = useState('');

        const url1 = 'http://localhost:8080/user/gethotels';

        useEffect(() => {
            getAllNotes();
        }, []);

        const getAllNotes = () => {
            axios.get(url1, {
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

        // const { notes } = props;

        const province = localStorage.getItem("travel_province");

        const saveHotelData = (h, hid) => {
            localStorage.setItem("hotelname", h);
            localStorage.setItem("hotelid", hid);
        }

        if (notes.length > 0) {
            return (
                notes.map((note, index) => {
                    //console.log(note);
                    // if (note.province == province) {
                        return (
                            <div className="mt-3 p-1 d-flex flex-row hotel-container">
                                <img src={araliya} className="float-left hotel-img" alt="Epitome"></img>

                                <div className="d-flew flex-column w-100 info-container">
                                    <h5 className="pt-4 pb-2 pl-4 font-weight-bold">{note.name}</h5>
                                    <h8 className="pl-4 font-weight-bold address">Location : {note.address}</h8><br />
                                    <h8 className="pl-4 font-weight-bold address">Email : {note.email}</h8><br />
                                    <h8 className="pl-4 font-weight-bold address">Contact : {note.contactNumber}</h8>
                                    <div>
                                        <h7 className="pl-4 font-weight-bold stars">Ratings : {note.rate} / 10</h7>
                                    </div>
                                    <div className="d-flex flex-row justify-content-end">
                                        {/* <h8 className="pl-4 rate">Very Good | <h8 className="reviews">215 reviews</h8></h8> */}
                                        <div className="float-right">
                                            <Link to={"/hoteldetails"}><button onClick={() => { saveHotelData(note.name, note.hotel_id) }} className="h4 rounded b-now"><span>Book Now</span></button></Link>
                                        </div>
                                    </div>
                                </div>

                                {/* {notes.name} */}

                            </div>
                        )
                    }
                // }
                )
            )
        }
    }

    return (
        <>
            {displayNotes(props)}
        </>
    )
}

