import React, { useState } from "react";
import './admintranspotation.css';
import profile from './Profile.jpg';
import avishi from './avishi.jfif';
import subha from './subha.jfif';
import chathura from './chathura.jfif';
import kasun from './kasun.jfif';
import sadun from './sandun.jfif';
import pramith from './pramith.jfif';
import { useEffect } from "react";
import axios from "axios";

const PopularTransportersChild = () => {

    const accessToken = localStorage.jwtToken;

    const url2 = 'http://localhost:8080/user/suggetionguide';

    const [transport, setTransport] = useState('');

    useEffect(() => {
        suggetTransport();
    }, []);

    const suggetTransport = () => {
        axios.get(url2, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allGuide = response.data;
            setTransport(allGuide);
            //console.log(allGuide);
        }).catch((error) => {
            console.log(error);
        })
    }

    const displayDetails = () => {

        if (transport.length > 0) {
            return (
                transport.slice(0)
                .reverse().map((transport, index) => {
                    if (index < 10 && transport.accountstatus == 'ture') {
                        return (
                            <div className="d-flex flex-row  valuable-customers">
                                <img src={profile} className="valuable-customer-profile-img mr-3 popular-guide-img" alt="Profile Picture"></img>
                                <span className="popular-places-province d-flex justify-content-center">{transport.firstname}{" "}{transport.lastname} - {transport.province} Province </span>
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

export default PopularTransportersChild;