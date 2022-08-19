import React from "react";
import HotelNav from "../components/Hotels/HotelNav";
import Navbar from "../components/Navbar/Navbar";
import hotelinfo from "../components/Hotels/hotelinfo.css";

const HotelInfo = () => {
    return (
        <div>
            <Navbar />
            <div className="p-5 mt-3 text-left container">
                <h2 className="mb-3 title font-weight-bold hotel-name">The Epitome</h2>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column left-side">
                        <div className="d-flex flex-column hotel-pic">
                            <div className="d-flex flex-row img-container">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="sample" alt="Epitome"></img>
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="sample" alt="Epitome"></img>
                            </div>
                            <div className="d-flex flex-row">
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="sample" alt="Epitome"></img>
                                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" className="sample" alt="Epitome"></img>
                            </div>
                        </div>
                        <div className="d-flex flex-row l-container">
                            <div className="mt-2 bg-light location">
                                Map
                            </div>
                            <div className="w-50 mt-2 ml-2 pt-2 pb-2 pl-3 pr-3 book-info">
                                <h6 className="font-weight-bold">District</h6>
                                <div className="bg-light text-center mb-2 text-muted data">Kurunegala</div>
                                <h6 className="font-weight-bold">Check-In date</h6>
                                <div className="bg-light text-center mb-2 text-muted data">Thursday 14 July 2022</div>
                                <h6 className="font-weight-bold">Check-Out date</h6>
                                <div className="bg-light text-center mb-2 text-muted  data">Sunday 17 July 2022</div>
                                <h6 className="font-weight-bold">3- night stay</h6>
                                <div className="d-flex flex-column bg-light text-center mb-2 text-muted data l-box"><span>Adults - 2, Children - 0</span><span>01 room</span></div>
                            </div>
                        </div>
                    </div>
                    <div className=" d-flex flex-column right-side">
                        <HotelNav />
                        <div className="d-flex w-100">
                            <table className="table table-hover align-middle mb-0 ">
                                <thead class="t-head">
                                    <th scope="col">Room type</th>
                                    <th scope="col">Sleeps</th>
                                    <th scope="col">Price of the room</th>
                                    <th scope="col">Rooms</th>
                                    <th scope="col"></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="bed-type">Standard Single Room</div>
                                            <div className="d-flex flex-column">
                                                <span className="r-facility">1 Single bed</span>
                                                <span className="r-facility">Free Wifi</span>
                                                <span className="r-facility">Breakfast included</span>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td >
                                            <div className="d-flex flex-column">
                                                <span className="r-price">LKR 5000.00</span>
                                                <span className="r-facility">+ 10% Taxes and charges</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <select className="rooms" name="room">
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="bed-type">Standard Double Room</div>
                                            <div className="d-flex flex-column">
                                                <span className="r-facility">1 Double bed</span>
                                                <span className="r-facility">Free Wifi</span>
                                                <span className="r-facility">Breakfast included</span>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td >
                                            <div className="d-flex flex-column">
                                                <span className="r-price">LKR 10000.00</span>
                                                <span className="r-facility">+ 10% Taxes and charges</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <select className="rooms" name="room">
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="bed-type">Standard Tripple Room</div>
                                            <div className="d-flex flex-column">
                                                <span className="r-facility">1 Single bed & 1 Double bed</span>
                                                <span className="r-facility">Free Wifi</span>
                                                <span className="r-facility">Breakfast included</span>
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td >
                                            <div className="d-flex flex-column">
                                                <span className="r-price">LKR 14000.00</span>
                                                <span className="r-facility">+ 10% Taxes and charges</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <select className="rooms" name="room">
                                                    <option value="0">0</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td>
                                            <a href="#"><button className="btn btn-primary">Reserve</button></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelInfo;