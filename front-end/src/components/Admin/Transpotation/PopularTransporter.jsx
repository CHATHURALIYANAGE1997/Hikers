import React from "react";
import './admintranspotation.css';
import profile from './Profile.jpg';

const PopularTransporters = () => {
    return (
        <div className="d-flex flex-column popular-places-container">
            <h5>Most Rated Service Providers</h5>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera (Southern) </span>
                <span className="popular-places-province">9/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera (Western)</span>
                <span className="popular-places-province">9/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera (Western)</span>
                <span className="popular-places-province">8/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera (Southern)</span>
                <span className="popular-places-province">7/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera (Southern)</span>
                <span className="popular-places-province">6.5/10</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera (Southern)</span>
                <span className="popular-places-province">6/10</span>
            </div>
        </div>
    );
}

export default PopularTransporters;