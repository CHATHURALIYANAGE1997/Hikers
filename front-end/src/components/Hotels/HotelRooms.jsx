import React from "react";
import "./hotelinfo.css";

const HotelRooms = () => {
    return (

        <div className="text-left hr-container w-100">
            <div className="d-flex flex-column">
                <div className="d-flex flex-row hr-info">
                    <div className="d-flex flex-column hr-data">
                        <span>District</span>
                        <div className="bg-white p-1">Kurunagale</div>
                    </div>
                    <div className="d-flex flex-column hr-data">
                        <span>Check-In date</span>
                        <div className="bg-white p-1">Thu 14 Jul 2022</div>
                    </div>
                    <div className="d-flex flex-column hr-data">
                        <span>Check-Out date</span>
                        <div className="bg-white p-1">Sat 23 Jul 2022</div>
                    </div>
                    <div className="d-flex flex-column">
                        <span>3-night stay</span>
                        <div className="d-flex flex-row bg-white p-1"><span className="hr-nights">Adults-2</span><span className="hr-nights">Children-0</span><span>1 room</span></div>
                    </div>
                </div>
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
                                </tr>
                            </tbody>
                        </table>
                        <div className="d-flex hr-reserve">
                            <a href="/reserve"><button className="btn btn-primary hr-reserve-btn">Reserve</button></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default HotelRooms;