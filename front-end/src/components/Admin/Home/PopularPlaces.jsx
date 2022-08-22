import React from "react";
import './home.css';


const PopularPlaces = () => {
    return (
        <div className="d-flex flex-column popular-places-container">
            <h5>Most Popular Places</h5>
            <div className="d-flex flex-row justify-content-between">
                <h6>Province</h6>
                <h6>Name</h6>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <span className="popular-places-province">North Westren PRovince</span>
                <span className="popular-places-province">Dolukanda</span>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <span className="popular-places-province">Southern Province</span>
                <span className="popular-places-province">Wadihiti Kanda</span>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <span className="popular-places-province">Central PRovince</span>
                <span className="popular-places-province">Hanthan</span>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <span className="popular-places-province">Sabaragamuwa Province</span>
                <span className="popular-places-province">Adara Kanda</span>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <span className="popular-places-province">Sabaragamuwa Province</span>
                <span className="popular-places-province">Adam's Peak</span>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <span className="popular-places-province">North Westren Province</span>
                <span className="popular-places-province">Bathalegala</span>
            </div>
            
        </div>
    );
}

export default PopularPlaces;