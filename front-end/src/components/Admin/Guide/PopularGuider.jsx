import React, { useState } from "react";
import './adminguide.css';
import PopularGuideChild from "./PopularGuideChild";
import { useEffect } from "react";
import axios from "axios";

const PopularGuide = () => {

    return (
        <div className="d-flex flex-column popular-places-container">
            <h5>Most Rated Guiders</h5>
            {/* <div className="d-flex flex-row  valuable-customers">
                <span className="popular-places-province w-25">Image</span>
                <span className="popular-places-province w-50">Name</span>
            </div> */}
            <PopularGuideChild />
        </div>
    );


}

export default PopularGuide;