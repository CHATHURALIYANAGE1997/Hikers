import React from "react";
import { Link } from "react-router-dom";
import araliya from "./Arliyavilla.jfif";


export default function HotelCard(props) {
    const displayNotes = (props) => {

        const { notes } = props;

        if (notes.length > 0) {
            return (
                notes.map((note, index) => {
                    console.log(note);
                    return (
                        <div className="mt-3 p-1 d-flex flex-row hotel-container">
                            <img src={araliya} className="float-left hotel-img" alt="Epitome"></img>

                            <div className="d-flew flex-column w-100 info-container">
                                <h5 className="pt-4 pb-2 pl-4 font-weight-bold">{note.name}</h5>
                                <h8 className="pl-4 font-weight-bold address">Location : {note.address}</h8><br />
                                <h8 className="pl-4 font-weight-bold address">Email : {note.email}</h8><br />
                                <h8 className="pl-4 font-weight-bold address">Contact : {note.contactNumber}</h8>
                                <div>
                                    <h7 className="pl-4 font-weight-bold stars">{note.rate}</h7>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <h8 className="pl-4 rate">Very Good | <h8 className="reviews">215 reviews</h8></h8>
                                    <div className="float-right">
                                        <Link to={"/hoteldetails"}><button className="h4 rounded b-now"><span>Book Now</span></button></Link>
                                    </div>
                                </div>
                            </div>

                            {/* {notes.name} */}

                        </div>
                    )
                })
            )
        }
    }

    return (
        <>
            {displayNotes(props)}
        </>
    )
}

