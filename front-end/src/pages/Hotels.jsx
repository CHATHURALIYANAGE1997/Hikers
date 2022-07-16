import React from "react";
import Navbar from "../components/Navbar/Navbar";
import hotels from "../components/Hotels/hotels.css"
const Hotels = () => {
    return (
        <div>
            <Navbar />
            <div className="p-5 text-left container">
                <h2 className="mb-3 title">North-Western Province: 3 properties found</h2>
                <div className="mb-4 d-flex flex-row justify-content-between">
                    <div className="bg-dark text-light d-flex flex-column justify-content-center box">
                        <span>Check-In</span>
                        <input type="date"></input>
                    </div>
                    <div className="bg-dark text-light d-flex flex-column justify-content-center box">
                        <span>Check-Out</span>
                        <input type="date"></input>
                    </div>
                    <div className="bg-dark text-light box d-flex flex-row">
                        <span className="mt-auto ml-auto mr-2 mb-auto">Rooms</span>
                        <input type="number" id="typenumber" className="form-control mt-auto mr-auto mb-auto room" min={0}></input>
                    </div>
                    <div className="bg-dark text-light box d-flex flex-row">
                        <div className="pr-3 m-auto">Guests</div>
                        <div className="pr-1 m-auto">Adult</div>
                        <input type="number" id="typenumber" className="form-control m-auto room" min={0}></input>
                        <div className="pr-1 pl-2 m-auto">Children</div>
                        <input type="number" id="typenumber" className="form-control m-auto room" min={0}></input>
                    </div>
                </div>
                <div className="mt-3 p-1 d-flex flex-row hotel-container">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="float-left hotel-img" alt="Epitome"></img>
                    <div className="d-flew flex-column w-100">
                        <h5 className="pt-4 pb-2 pl-4 font-weight-bold">The Epitome</h5>
                        <h8 className="pl-4 font-weight-bold address">57 Kurunegala - Dambulla Rd, Badagamuwa.</h8>
                        <div>
                            <h7 className="pl-4 font-weight-bold">4.8</h7>
                        </div>
                        <div>
                            <h8 className="pl-4">Very Good | <h8 className="reviews">215 reviews</h8></h8>
                        </div>
                        <div className="float-right">
                            <a href="#"><button className="h4 book">Book Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="mt-3 p-1 d-flex flex-row hotel-container">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="float-left hotel-img" alt="Epitome"></img>
                    <div className="d-flew flex-column w-100">
                        <h5 className="pt-4 pb-2 pl-4 font-weight-bold">The Epitome</h5>
                        <h8 className="pl-4 font-weight-bold address">57 Kurunegala - Dambulla Rd, Badagamuwa.</h8>
                        <div>
                            <h7 className="pl-4 font-weight-bold">4.8</h7>
                        </div>
                        <div>
                            <h8 className="pl-4">Very Good | <h8 className="reviews">215 reviews</h8></h8>
                        </div>
                        <div className="float-right">
                            <a href="#"><button className="h4 book">Book Now</button></a>
                        </div>
                    </div>
                </div>
                <div className="mt-3 p-1 d-flex flex-row hotel-container">
                    <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="float-left hotel-img" alt="Epitome"></img>
                    <div className="d-flew flex-column w-100">
                        <h5 className="pt-4 pb-2 pl-4 font-weight-bold">The Epitome</h5>
                        <h8 className="pl-4 font-weight-bold address">57 Kurunegala - Dambulla Rd, Badagamuwa.</h8>
                        <div>
                            <h7 className="pl-4 font-weight-bold">4.8</h7>
                        </div>
                        <div>
                            <h8 className="pl-4">Very Good | <h8 className="reviews">215 reviews</h8></h8>
                        </div>
                        <div className="float-right">
                            <a href="#"><button className="h4 book">Book Now</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hotels