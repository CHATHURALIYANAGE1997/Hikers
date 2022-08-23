import React, { useState } from "react";
import './guiderequest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';


function GuideRequests() {

    const [open, setOpen] = useState(false);

    return (
        <div className="d-flex flex-column guide-request-container">
            <h4 className="guide-requests-title">Traveleing Guide Registrations</h4>
            <div className="d-flex flex-column guide-request-guide">
                <div className="d-flex flex-row">
                    <h5 className="guide-requests-title">
                        <span className="request-from">Request from </span>
                        Saranga Disanayake
                    </h5>
                    <span> sarangadisanayake@gmail.com</span>
                </div>

                {/* <div className="view-more-container"> */}
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text1"
                        aria-expanded={open}
                        className="view-more"
                    >
                        <FontAwesomeIcon icon={faAnglesDown} className="view-more-icon"/>
                        View more
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text1">
                            <div className="d-flex flex-column mb-2">
                                <div className="d-flex flex-row">
                                    <span className="w-25">First name</span>
                                    <span>: </span>
                                    <span className="w-25">Saranga</span>
                                </div>
                                <div className="d-flex flex-row mb-2">
                                    <span className="w-25">Last name</span>
                                    <span>: </span>
                                    <span className="w-25">Disanayake</span>
                                </div>
                                <div className="d-flex flex-row mb-2">
                                    <span className="w-25">Email</span>
                                    <span>: </span>
                                    <span className="w-25">saranagadisanayake@gmail.com</span>
                                </div>
                                <div className="d-flex flex-row mb-2">
                                    <span className="w-25">Contact number</span>
                                    <span>: </span>
                                    <span className="w-25">0778765432</span>
                                </div>
                                <div className="d-flex flex-row mb-2">
                                    <span className="w-25">NIC</span>
                                    <span>: </span>
                                    <span className="w-25">9823456789 V</span>
                                </div>
                                <div className="d-flex flex-row mb-2">
                                    <span className="w-25">Gender</span>
                                    <span>: </span>
                                    <span className="w-25">Male</span>
                                </div>
                                <div className="d-flex flex-row mb-2">
                                    <span className="w-25">NIC image</span>
                                    <span>: </span>
                                    <span className="w-25">saranaga.jpg</span>
                                </div>
                                <div className="d-flex flex-row mb-2">
                                    <span className="w-25">DOB</span>
                                    <span>: </span>
                                    <span className="w-25">1998-04-26</span>
                                </div>
                                <div className="d-flex flex-row mb-2">
                                    <span className="w-25">Police report</span>
                                    <span>: </span>
                                    <span className="w-25">saranga.pdf</span>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-between w-50">
                                <button className="reject-btn">Reject</button>
                                <button className="accept-btn">Accept</button>
                            </div>
                        </div>
                    </Collapse>
                {/* </div> */}
            </div>
            
        </div>
    );
}

export default GuideRequests;