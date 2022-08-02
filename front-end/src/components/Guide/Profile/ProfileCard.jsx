import React from "react";
import './profile.css';
import profile from './Picture.png';

const ProfileCard = () => {
    return (
        <div class="pc-container">
            <div className="pc-card">
                <img src={profile} className="pc-pic" alt="Profile Picture"></img>
                <h4 className="pc-name">M.S.D Perera</h4>
                <h7 className="pc-name">Traveling Guide</h7>
            </div>
        </div>
    );
}

export default ProfileCard;

