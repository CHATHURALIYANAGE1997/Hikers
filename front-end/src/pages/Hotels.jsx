import React from "react";
import Navbar from "../components/Navbar/Navbar";
import hotels from "../components/Hotels/hotels.css"
const Hotels = () => {
    return (
        <div>
            <Navbar />
            <div className="p-5 text-left container">
                <h2 className="mb-3 title hotel-name">North-Western Province: 3 properties found</h2>
                <div className="mb-4 d-flex flex-row justify-content-between">
                    <div className="bg-dark text-light d-flex flex-column box">
                        <span className="pr-2">Check-In</span>
                        <input type="date"></input>
                    </div>
                    <div className="bg-dark text-light d-flex flex-column justify-content-center box">
                        <span>Check-Out</span>
                        <input type="date"></input>
                    </div>
                    <div className="bg-dark text-light box d-flex flex-row justify-content-center r-div">
                        <label className="mt-auto mr-2 mb-auto r-label">Rooms</label>
                        <select className="rooms" name="room">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="bg-dark text-light box d-flex flex-row g-div">
                        <div className="pr-3 m-auto">Guests</div>
                        <div className="bg-dark text-light box d-flex flex-row justify-content-center">
                            <label className="mt-auto mr-2 mb-auto r-label">Adults</label>
                            <select className="rooms" name="room">
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <label className="mt-auto mr-2 mb-auto r-label">Children</label>
                        <select className="rooms" name="room">
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
                <div className="mt-3 p-1 d-flex flex-row hotel-container">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="float-left hotel-img" alt="Epitome"></img>
                    <div className="d-flew flex-column w-100 info-container">
                        <h5 className="pt-4 pb-2 pl-4 font-weight-bold">The Epitome</h5>
                        <h8 className="pl-4 font-weight-bold address">57 Kurunegala - Dambulla Rd, Badagamuwa.</h8>
                        <div>
                            <h7 className="pl-4 font-weight-bold stars">4.8</h7>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <h8 className="pl-4 rate">Very Good | <h8 className="reviews">215 reviews</h8></h8>
                            <div className="float-right">
                                <a href="/hotel/"><button className="h4 rounded b-now"><span>Book Now</span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 p-1 d-flex flex-row hotel-container">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="float-left hotel-img" alt="Epitome"></img>
                    <div className="d-flew flex-column w-100 info-container">
                        <h5 className="pt-4 pb-2 pl-4 font-weight-bold">The Epitome</h5>
                        <h8 className="pl-4 font-weight-bold address">57 Kurunegala - Dambulla Rd, Badagamuwa.</h8>
                        <div>
                            <h7 className="pl-4 font-weight-bold stars">4.8</h7>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <h8 className="pl-4 rate">Very Good | <h8 className="reviews">215 reviews</h8></h8>
                            <div className="float-right">
                                <a href="/hotel/"><button className="h4 rounded b-now"><span>Book Now</span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 p-1 d-flex flex-row hotel-container">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="float-left hotel-img" alt="Epitome"></img>
                    <div className="d-flew flex-column w-100 info-container">
                        <h5 className="pt-4 pb-2 pl-4 font-weight-bold">The Epitome</h5>
                        <h8 className="pl-4 font-weight-bold address">57 Kurunegala - Dambulla Rd, Badagamuwa.</h8>
                        <div>
                            <h7 className="pl-4 font-weight-bold stars">4.8</h7>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <h8 className="pl-4 rate">Very Good | <h8 className="reviews">215 reviews</h8></h8>
                            <div className="float-right">
                                <a href="/hotel/"><button className="h4 rounded b-now"><span>Book Now</span></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotels;