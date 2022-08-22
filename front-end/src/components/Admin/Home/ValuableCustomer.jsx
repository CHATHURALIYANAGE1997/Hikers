import React from "react";
import './home.css';
import profile from './Picture.png';


const ValuableCustomer = () => {
    return (
        <div className="d-flex flex-column popular-places-container">
            <h5>Most Valuable Customer</h5>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <span className="popular-places-province ">Image</span>
                <span className="popular-places-province">Name</span>
                <span className="popular-places-province">Spent Amount</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Avishi Jayaweera</span>
                <span className="popular-places-province">$ 9500</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera</span>
                <span className="popular-places-province">$ 9500</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Pramith Perera</span>
                <span className="popular-places-province">$ 9500</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Sadun Kamilka</span>
                <span className="popular-places-province">$ 9500</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Chathura Liyanage</span>
                <span className="popular-places-province">$ 9500</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={profile} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Subha Jayaweera</span>
                <span className="popular-places-province">$ 9500</span>
            </div>
        </div>
    );
}

export default ValuableCustomer;