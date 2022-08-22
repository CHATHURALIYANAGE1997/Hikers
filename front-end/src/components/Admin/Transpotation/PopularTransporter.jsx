import React from "react";
import './admintranspotation.css';
import profile from './Profile.jpg';
import avishi from './avishi.jfif';
import subha from './subha.jfif';
import chathura from './chathura.jfif';
import kasun from './kasun.jfif';
import sadun from './sandun.jfif';
import pramith from './pramith.jfif';

const PopularTransporters = () => {
    return (
        <div className="d-flex flex-column popular-places-container">
            <h5>Most Rated Service Providers</h5>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <span className="popular-places-province">Image</span>
                <span className="popular-places-province">Name</span>
                <span className="popular-places-province">Rate</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera (Southern) </span>
                <span className="popular-places-province">9/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={avishi} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Avishi Jayaweera (Western)</span>
                <span className="popular-places-province">9/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={chathura} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Chathura Liyanage (Western)</span>
                <span className="popular-places-province">8/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={pramith} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Pramith De Silva (Sabaragamuwa)</span>
                <span className="popular-places-province">7/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={subha} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Subha Jayaweera (Central)</span>
                <span className="popular-places-province">6.5/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={sadun} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Sadun Perera (Southern)</span>
                <span className="popular-places-province">6/10</span>
            </div>
        </div>
    );
}

export default PopularTransporters;