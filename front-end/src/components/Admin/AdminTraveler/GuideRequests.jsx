import React, { useState } from "react";
import './guiderequest.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link, Redirect } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import authToken from "../../../utils/authToken";
import { Alert } from "react-bootstrap";

function GuideRequests(props) {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    const { guiders } = props;

    const [open, setOpen] = useState(false);

    //const accessToken = localStorage.jwtToken;

    //console.log(accessToken);

    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const accessToken = localStorage.jwtToken;

    const dispatch = useDispatch();

    const acceptRegistration = (e) => {
        const url1 = `http://localhost:8080/user/verifyGuideByAdmin/${e}`;
        axios.get(url1, {
            headers: { Authorization: `Bearer ${accessToken}` },
        }).then((response) => {
            setShow(true);
            setError("Successfully registered");
            //console.log(response);
            console.log("success");
        }).catch((error) => {
            setShow(true);
            setError("Registration declined");
            console.log(error);   
        })
    }


    const rejectRegistration = (e) => {
        const url2 = `http://localhost:8080/user/RejectGuideByAdmin/${e}`;
        axios.get(url2, {
            headers: { Authorization: `Bearer ${accessToken}` },
        }).then((response) => {
            setShow(true);
            setError("Successfully registered");
        }).catch((error) => {
            console.log(error);
            console.log("decline");
        })
    }


    const displayDetails = (props) => {
        if (guiders.length > 0) {
            return (
                guiders.map((guiders, index) => {
                    if (guiders.accountstatus == "false") {
                        //console.log(guiders);
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
                                            <button onClick={() => {rejectRegistration(guiders.email)}} type="submit" type="button" className="reject-btn">Reject</button>
                                            <button onClick={() => { acceptRegistration(guiders.email) }} type="submit" type="button" className="accept-btn">Accept</button>
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