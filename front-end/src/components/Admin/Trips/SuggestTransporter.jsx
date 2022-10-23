import React, { useState } from "react";
import './admintrips.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
import { useEffect } from "react";
import axios from "axios";

function SuggestTransporter(props) {

    const accessToken = localStorage.jwtToken;

    //Trip province
    let province = "Southern";

    //Trip date
    let tripdate = '10-10-2022';

    const url2 = 'http://localhost:8080/user/suggetiontransport';

    const [transport, setTransport] = useState('');

    useEffect(() => {
        suggetGuide();
    }, []);

    const suggetGuide = () => {
        axios.get(url2, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allGuide = response.data;
            setTransport(allGuide);
            console.log(allGuide);
        }).catch((error) => {
            console.log(error);
        })
    }

    const displayDetails = (props) => {

        if (transport.length > 0) {
            return (
                transport.slice(0)
                    .reverse().map((transport, index) => {
                        //console.log(transport);
                        //console.log(index);
                        if (transport.province == province) {
                            return (
                                <div className="d-flex flex-column w-100 mb-2">
                                    <label className="mr-2 trip-request-suggest" value={index}>{transport.firstname} {" "} {transport.lastname}</label>
                                    <label className="guide-option-overall">Overall Ratings : {transport.overrall}</label>
                                    <div className="ml-3 d-flex flex-row w-100">
                                        <label className="mr-2 w-25">Punctuality - {transport.securityoverrall}</label>
                                        <lable className="mr-2 w-25">Security - {transport.neatandtidyoverrall}</lable>
                                        <label className="mr-2 w-25">Communication - {transport.navigationcapacityoverrall}</label>
                                        <label className="mr-2 w-25">Domain knowledge - {transport.punctualityoverrall}</label>
                                    </div>
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

export default SuggestTransporter;