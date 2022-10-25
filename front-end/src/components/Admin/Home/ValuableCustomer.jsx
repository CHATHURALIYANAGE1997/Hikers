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
        <div className="d-flex flex-column popular-places-container w-50 valubale-customer-container">
            <div className="mostengagedhead">
                <h6 className="mostengagedtopic">Highest spending customers</h6>
            </div>
            <div className="d-flex flex-row w-100 valuable-customers">
                <span className="popular-places-province vc-bold w-25">Image</span>
                <span className="popular-places-province vc-bold w-25">Name</span>
                <span className="popular-places-province vc-bold w-25">Spend amount</span>
                <span className="popular-places-province vc-bold w-25">Promotion</span>
            </div>
            <div className="d-flex flex-row w-100 valuable-customers">
                <div className="w-25">
                    <img src={avishi} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                </div>
                <span className="popular-places-province w-25">Avishi Jayaweera</span>
                <span className="popular-places-province w-25">LKR 125 400</span>
                <span className="promotion-applied w-25">Applied</span>
            </div>
            <div className="d-flex flex-row w-100 valuable-customers">
                <div className="w-25">
                    <img src={kasun} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                </div>
                <span className="popular-places-province w-25">Kasun Perera</span>
                <span className="popular-places-province w-25">LKR 118 000</span>
                <span className="promotion-notapplied w-25">Not applied</span>
            </div>
            <div className="d-flex flex-row w-100n valuable-customers">
                <div className="w-25">
                    <img src={pramith} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                </div>
                <span className="popular-places-province w-25">Chathu Gamage</span>
                <span className="popular-places-province w-25">LKR 46 560</span>
                <span className="promotion-notapplied w-25">Not applied</span>
            </div>
            <div className="d-flex flex-row w-100 valuable-customers">
                <div className="w-25">
                    <img src={sadun} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                </div>
                <span className="popular-places-province w-25">Sadun Kamilka</span>
                <span className="popular-places-province w-25">LKR 37 900</span>
                <span className="promotion-notapplied w-25">Not applied</span>
            </div>
            <div className="d-flex flex-roww-100 valuable-customers">
                <div className="w-25">
                    <img src={chathura} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                </div>
                <span className="popular-places-province w-25">Pramith Perera</span>
                <span className="popular-places-province w-25">LKR 35 500</span>
                <span className="promotion-notapplied w-25">Not applied</span>
            </div>
            <div className="d-flex flex-row w-100 valuable-customers">
                <div className="w-25">
                    <img src={subha} className="valuable-customer-profile-img" alt="Profile Picture"></img>
                </div>
                <span className="popular-places-province w-25">Subha Jayaweera</span>
                <span className="popular-places-province w-25">LKR 29 500</span>
                <span className="promotion-notapplied w-25">Not applied</span>
            </div>
        </div>
    );
}

export default ValuableCustomer;