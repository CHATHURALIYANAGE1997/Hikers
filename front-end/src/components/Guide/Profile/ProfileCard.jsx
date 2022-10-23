import React from "react";
import './profile.css';
import profile from './Picture.png';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import authToken from "../../../utils/authToken";
import { useSelector } from "react-redux";

const ProfileCard = (props) => {

    const {guide} = props;

    return (
        <div class="pc-container">
            <div className="pc-card">             
                    <img src={profile} className="pc-pic" alt="Profile Picture"></img>
                    <h4 className="pc-name">{guide.firstname} {" "}{guide.lastname}</h4>
                    <h7 className="pc-name">Traveling Guide</h7>
             
            </div>
        </div>
    );
}

export default ProfileCard;

