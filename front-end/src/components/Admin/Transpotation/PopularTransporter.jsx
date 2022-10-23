import React from "react";
import './admintranspotation.css';
import profile from './Profile.jpg';
import avishi from './avishi.jfif';
import subha from './subha.jfif';
import chathura from './chathura.jfif';
import kasun from './kasun.jfif';
import sadun from './sandun.jfif';
import pramith from './pramith.jfif';
import PopularTransportersChild from "./PopularTransporterChild";

const PopularTransporters = () => {
    return (
        <div className="d-flex flex-column popular-places-container">
            <h5>Most Rated Transport Service Providers</h5>
            {/* <div className="d-flex flex-row justify-content-between valuable-customers">
                <span className="popular-places-province">Image</span>
                <span className="popular-places-province">Name</span>
            </div> */}
            <PopularTransportersChild />
        </div>
    );
}

export default PopularTransporters;