import React from "react";
import './home.css';
import profile from './Picture.png';
import avishi from './avishi.jfif';
import subha from './subha.jfif';
import chathura from './chathura.jfif';
import kasun from './kasun.jfif';
import sadun from './sandun.jfif';
import pramith from './pramith.jfif';

const MostTrippedCustomer = () => {
    return (
        <div className="d-flex flex-column popular-places-container w-50 valubale-customer-container">
             <div className="d-flex flex-row justify-content-between valuable-customers">
                <span className="popular-places-province vc-bold">Image</span>
                <span className="popular-places-province vc-bold">Name</span>
                <span className="popular-places-province vc-bold">Spent Amount</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={avishi} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Avishi Jayaweera</span>
                <span className="popular-places-province">7</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={kasun} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Kasun Perera</span>
                <span className="popular-places-province">6</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={sadun} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Sadun Kamilka</span>
                <span className="popular-places-province">5</span>
            </div>
            <div className="d-flex flex-row justify-content-between valuable-customers">
                <img src={chathura} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                <span className="popular-places-province">Chathura Liyanage</span>
                <span className="popular-places-province">5</span>
            </div>
        </div>
    );
}

export default MostTrippedCustomer;