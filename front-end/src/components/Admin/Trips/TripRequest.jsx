import React, { useEffect, useState } from "react";
import './admintrips.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
import GuideOption from "./GuideOption";
import TransportOption from "./TransportOption";
import axios from "axios";
import authToken from "../../../utils/authToken";
import { useSelector } from "react-redux";
import SuggestGuide from "./SuggestGuide";
import SuggestTransporter from "./SuggestTransporter";

function TripRequest(props) {

    const [open, setOpen] = useState(false);

    return (
        <div className="d-flex flex-column guide-request-container">
            <h4 className="guide-requests-title">New Trips</h4>
            <div className="d-flex flex-column guide-request-guide">
                <div className="d-flex flex-row">
                    <h4 className="guide-requests-title">
                        <span className="request-from">Trip to </span>
                        Hanthana
                        <span className="request-from"> 25th December 2022</span>
                    </h4>
                </div>

                {/* <div className="view-more-container"> */}
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text1"
                    aria-expanded={open}
                    className="view-more"
                >
                    <FontAwesomeIcon icon={faAnglesDown} className="view-more-icon" />
                    View details
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text1 d-flex flex-column w-100 ">
                        <div className="d-flex flex-row w-100 mt-3">
                            <div className="d-flex flex-row w-100">
                                <span className="w-50">Location</span>
                                <span>: </span>
                                <span className="w-50">Hanthana Mountain Range</span>
                            </div>
                            <div className="d-flex flex-row w-100">
                                <span className="w-50">Date</span>
                                <span>: </span>
                                <span className="w-50">25-12-2022</span>
                            </div>
                            <div className="d-flex flex-row w-100">
                                <span className="w-50">Traveler's name</span>
                                <span>: </span>
                                <span className="w-50">Chathura Liyanage</span>
                            </div>
                        </div>
                        <div className="d-flex flex-row w-100 mt-2">
                            <div className="d-flex flex-row w-100">
                                <span className="w-50">Email</span>
                                <span>: </span>
                                <span className="w-50">chathura1@gmail.com</span>
                            </div>
                            <div className="d-flex flex-row w-100">
                                <span className="w-50">Contact number</span>
                                <span>: </span>
                                <span className="w-50">0766964138</span>
                            </div>
                            {/*<div className="d-flex flex-row w-100">*/}
                            {/*    <span className="w-50">NIC</span>*/}
                            {/*    <span>: </span>*/}
                            {/*    <span className="w-50">9823456789 V</span>*/}
                            {/*</div>*/}
                        </div>
                        <div className="d-flex flex-column mt-3">
                            <h5>Assign Travel Guide</h5>
                            <div className="">
                                <label>Assign : </label>
                                <select className="option-input" name="guide">
                                    <GuideOption />
                                </select>
                                <div className="w-50 mb-2 d-flex flex-column">
                                    <label className="mb-2 font-weight-bold text-info trip-request-suggest">Suggestions : </label>
                                    <SuggestGuide />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-3">
                            <h5>Assign Transport Service Provider</h5>
                            <div className="">
                                <label>Assign : </label>
                                <select className="option-input" name="transporter">
                                    <TransportOption />
                                </select>
                                <div className="w-50 mb-2 d-flex flex-column">
                                    <label className="mb-2 font-weight-bold text-info trip-request-suggest">Suggestions : </label>
                                    <SuggestTransporter />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between w-75 mt-3">
                            {/*<button    className="reject-btn">Reject</button>*/}
                            <button className="accept-btn">Complete</button>
                        </div>
                    </div>
                </Collapse>
                {/* </div> */}
            </div>
        </div>
    );


}

export default TripRequest;
