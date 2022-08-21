import React from "react";
import './travelerprofile.css';
import profile from './Picture.png';

const TravelerProfileCard = () => {
    return (
        <div class="pc-container">
            <div className="pc-card">
                <img src={profile} className="pc-pic" alt="Profile Picture"></img>
                <h4 className="pc-name">M.S.D Perera</h4>
                <h7 className="pc-name">Traveler</h7>
            </div>
        </div>
    );
}

export default TravelerProfileCard;

