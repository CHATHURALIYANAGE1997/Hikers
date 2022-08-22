import React from "react";
import './transportissues.css';

const TransportIssues = () => {
    return (
        <div className="w-100">
            <h4 className="transport-issues-title">Upcome Trip Issues</h4>
            <div className="d-flex flex-column transport-issues-container">
                <div className="d-flex flex-row justify-content-between">
                    <h5 className="transport-issues-trip-title">Trip from Kurunegala town to Dolukanda</h5>
                    <h5>Date : 30th July 2022</h5>
                </div>
                <div className="d-flex flex-row">
                    <h6 className="w-25">Passenger count</h6>
                    <h6>: 03</h6>
                </div>
                <div className="d-flex flex-row">
                    <h6 className="w-25">Distance</h6>
                    <h6>: 11 km</h6>
                </div>
                <div className="d-flex flex-column mb-2">
                    <h6 className="w-25">Team details</h6>
                    <div className="d-flex flex-row">
                        <div className="transport-issues-team">
                            <h7>Member #1</h7>
                            <div className="d-flex flex-column transport-issues-members">
                                <span>Mr. Amila Perera</span>
                                <span>077-1234567</span>
                                <span>801234567 V</span>
                            </div>
                        </div>
                        <div className="transport-issues-team">
                            <h7>Member #2</h7>
                            <div className="d-flex flex-column transport-issues-members">
                                <span>Mr. Kasun Dissanayake</span>
                                <span>077-4567890</span>
                                <span>981234987 V</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h6>Any issues regarding this trip?</h6>
                <form>
                    <input type="text" placeholder="Enter your issue" className="transport-issues-input"/>
                    <div className="d-flex flex-row justify-content-end">
                        <input type="submit" className="transport-issues-submit-btn"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TransportIssues;