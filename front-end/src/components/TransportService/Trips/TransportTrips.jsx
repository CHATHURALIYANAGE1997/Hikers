import { render } from "@testing-library/react";
import React from "react";
import './transporttrips.css';
import { useState } from 'react';

const TransportTrips = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');

    const handleAccept = event => {
        event.preventDefault();
        console.log('form submitted')
    }

    const handleReject = event => {
        event.preventDefault();
        console.log('form rejected')
    }

    return (
        <div className="d-flex flex-column tr-container">
            <div className="d-flex flex-column tr-card">
                <div className="d-flex flex-row justify-content-between">
                    <h5>Trip to Nickkles</h5>
                    <h6>Date : 30th September 2022</h6>
                </div>
                <div className="d-flex flex-row">
                    <h7 className="w-25">Destination </h7>
                    <h7>: Kurunegala town to Nickkles</h7>
                </div>
                <div className="d-flex flex-row">
                    <h7 className="w-25">Distance</h7>
                    <h7>: 11km</h7>
                </div>
                <div className="d-flex flex-row">
                    <h7 className="w-25">Charge </h7>
                    <h7>: LKR 3,300</h7>
                </div>
                <div className="d-flex flex-row">
                    <h7 className="w-25">No. of team members</h7>
                    <h7>: 03</h7>
                </div>
                <div className="d-flex flex-column mt-2">
                    <h6 className="font-weight-bold">Team members (04)</h6>
                    <h7 className="tr-members">- Avishi Jayaweera - 086#######</h7>
                    <h7 className="tr-members">- Avishi Jayaweera - 086#######</h7>
                    <h7 className="tr-members">- Avishi Jayaweera - 086#######</h7>
                    <h7 className="tr-members">- Avishi Jayaweera - 086#######</h7>
                    <div className="d-flex justify-content-right tr-btn">
                        <button onClick={handleReject} className="tr-decline-btn">Decline</button>
                        <button onClick={handleAccept} className="tr-accept-btn">Accept</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransportTrips;