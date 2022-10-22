import React, { useState } from "react";
import './guiderequest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
import { useEffect } from "react";
import axios from "axios";

function GuideRequests(props) {

    const { guiders } = props;

    const [open, setOpen] = useState(false);

    const accessToken = localStorage.jwtToken;

    const handleAccept = () => {
        let email = localStorage.username;
        let path1 = 'http://localhost:8080/verifyGuideByAdmin/';
        const url1 = path1.concat(email);

        useEffect(() => {
            acceptRegistration();
        },[]);

        const acceptRegistration = () => {
            axios.get(url1, {
                Headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const status = response.data;
                console.log(status);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const handleReject = () => {
        let email = localStorage.username;
        let path1 = 'http://localhost:8080/RejectGuideByAdmin/';
        const url1 = path1.concat(email);

        useEffect(() => {
            rejectRegistration();
        },[]);

        const rejectRegistration = () => {
            axios.get(url1, {
                Headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const status = response.data;
                console.log(status);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    const displayDetails = (props) => {
        if (guiders.length > 0) {
            return (
                guiders.map((guiders, index) => {  
                    if (guiders.accountstatus !== "true") {
                        console.log(guiders);
                        return (
                            <div className="d-flex flex-column guide-request-guide">
                                <div className="d-flex flex-row">
                                    <h5 className="guide-requests-title">
                                        <span className="request-from">Request from </span>
                                        {guiders.firstname}{" "}{guiders.lastname}{" "}
                                    </h5>
                                    <span> {"    "}{guiders.email}</span>
                                </div>

                                {/* <div className="view-more-container"> */}
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text1"
                                    aria-expanded={open}
                                    className="view-more"
                                >
                                    <FontAwesomeIcon icon={faAnglesDown} className="view-more-icon" />
                                    View more
                                </Button>
                                <Collapse in={open}>
                                    <div id="example-collapse-text1">
                                        <div className="d-flex flex-column mb-2">
                                            <div className="d-flex flex-row">
                                                <span className="w-25">First name</span>
                                                <span>: </span>
                                                <span className="w-25 text-capitalize">{guiders.firstname}</span>
                                            </div>
                                            <div className="d-flex flex-row mb-2">
                                                <span className="w-25">Last name</span>
                                                <span>: </span>
                                                <span className="w-25 text-capitalize">{guiders.lastname}</span>
                                            </div>
                                            <div className="d-flex flex-row mb-2">
                                                <span className="w-25">Email</span>
                                                <span>: </span>
                                                <span className="w-25">{guiders.email}</span>
                                            </div>
                                            <div className="d-flex flex-row mb-2">
                                                <span className="w-25">Contact number</span>
                                                <span>: </span>
                                                <span className="w-25">{guiders.contactNumber}</span>
                                            </div>
                                            <div className="d-flex flex-row mb-2">
                                                <span className="w-25">NIC</span>
                                                <span>: </span>
                                                <span className="w-25">{guiders.nic}</span>
                                            </div>
                                            <div className="d-flex flex-row mb-2">
                                                <span className="w-25">Gender</span>
                                                <span>: </span>
                                                <span className="w-25 text-capitalize">{guiders.gender}</span>
                                            </div>
                                            <div className="d-flex flex-row mb-2">
                                                <span className="w-25">NIC image</span>
                                                <span>: </span>
                                                <span className="w-25">{guiders.nic_image}</span>
                                            </div>
                                            <div className="d-flex flex-row mb-2">
                                                <span className="w-25">DOB</span>
                                                <span>: </span>
                                                <span className="w-25">{guiders.dob}</span>
                                            </div>
                                            <div className="d-flex flex-row mb-2">
                                                <span className="w-25">Police report</span>
                                                <span>: </span>
                                                <span className="w-25">{guiders.police_report}</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row justify-content-between w-50">
                                            <button onClick={() => handleReject()} className="reject-btn">Reject</button>
                                            <button onClick={() => handleAccept()} className="accept-btn">Accept</button>
                                        </div>
                                    </div>
                                </Collapse>
                                {/* </div> */}
                            </div>
                        );
                    }
                })
            )
        }
    }

    return (
        <>
            {displayDetails(props)}
        </>
    )

}

export default GuideRequests;