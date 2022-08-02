import { render } from "@testing-library/react";
import React from "react";
import './trips.css';
import { useState } from 'react';

const TripRequest = () => {

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
                <h5>Trip to Nickkles</h5>
                <h7>Date : 30th September 2022</h7>
                <h7>Duration: 1 Day</h7>
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

export default TripRequest;