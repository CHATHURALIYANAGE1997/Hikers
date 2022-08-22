import React from "react";
import './home.css';
import profile from './Picture.png';
import avishi from './avishi.jfif';
import subha from './subha.jfif';
import chathura from './chathura.jfif';
import kasun from './kasun.jfif';
import sadun from './sandun.jfif';
import pramith from './pramith.jfif';

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
                <img src={avishi} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Avishi Jayaweera</span>
                <span className="popular-places-province">LKR 43 400</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={kasun} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera</span>
                <span className="popular-places-province">LKR 40 000</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={pramith} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Pramith Perera</span>
                <span className="popular-places-province">LKR 38 560</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={sadun} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Sadun Kamilka</span>
                <span className="popular-places-province">LKR 37 900</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={chathura} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Chathura Liyanage</span>
                <span className="popular-places-province">LKR 35 500</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={subha} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Subha Jayaweera</span>
                <span className="popular-places-province">LKR 29 500</span>
            </div>
        </div>
    );
}

export default ValuableCustomer;