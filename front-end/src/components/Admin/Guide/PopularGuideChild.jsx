import React, { useState } from "react";
import './adminguide.css';
import profile from './Profile.jpg';
import avishi from './avishi.jfif';
import subha from './subha.jfif';
import chathura from './chathura.jfif';
import kasun from './kasun.jfif';
import sadun from './sandun.jfif';
import pramith from './pramith.jfif';
import { useEffect } from "react";
import axios from "axios";

const PopularGuideChild = () => {

    const accessToken = localStorage.jwtToken;

    const url2 = 'http://localhost:8080/user/suggetionguide';

    const [guide, setGuide] = useState('');

    useEffect(() => {
        suggetGuide();
    }, []);

    const suggetGuide = () => {
        axios.get(url2, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allGuide = response.data;
            setGuide(allGuide);
            console.log(allGuide);
        }).catch((error) => {
            console.log(error);
        })
    }

    const displayDetails = () => {

        if (guide.length > 0) {
            return (
                guide.slice(0)
                .reverse().map((guide, index) => {
                    if (index < 10 && guide.accountstatus == 'ture') {
                        return (
                            <div className="d-flex flex-row  valuable-customers">
                                <img src={profile} className="valuable-customer-profile-img mr-3 popular-guide-img" alt="Profile Picture"></img>
                                <span className="popular-places-province d-flex justify-content-center">{guide.firstname}{" "}{guide.lastname} - {guide.province} Province </span>
                            </div>
                        )
                    }
                })
            )
        }
    }

    return (
        <>
            {displayDetails()}
        </>
    )
}

export default PopularGuideChild;