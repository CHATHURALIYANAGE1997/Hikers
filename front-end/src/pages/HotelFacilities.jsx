import React from "react";
import HotelNav from "../components/Hotels/HotelNav";
import Navbar from "../components/Navbar/Navbar";
import "../components/Hotels/facilities.css";
import epitome from "../components/Hotels/Epitome.png";
import resturant from "../components/Hotels/resturant.png";
import hotelview from "../components/Hotels/hotelview.png";
import food from "../components/Hotels/food.png";
import pool from "../components/Hotels/pool.png";
import Facilities from "../components/Hotels/Facilities";



const HotelFacilities = () => {
    return (
        <div>
            <Navbar />
            <div class="p-5 mt-3 text-left container">
                <h2 className="mb-3 title font-weight-bold hotel-name">The Epitome</h2>
                <div className="d-flex flex-row hf-page-container">
                    <div className="d-flex flex-column hf-left-side">
                        <div className="d-flex flex-row">
                            <img src={epitome} className="float-left hf-h-img" alt="front view"></img>
                            <img src={resturant} className="float-left hf-h-img" alt="resturant"></img>
                        </div>
                        <div className="d-flex flex-row">
                            <img src={hotelview} className="float-left hf-h-img" alt="hotel view"></img>
                            <img src={food} className="float-left hf-h-img" alt="food"></img>
                        </div>
                        <div className="w-100">
                            <img src={pool} className="float-left hf-pool-img" alt="food"></img>
                        </div>
                    </div>
                    <div className=" d-flex flex-column hf-right-side">
                        <HotelNav />
                        <Facilities />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelFacilities;