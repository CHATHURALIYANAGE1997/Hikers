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

function SuggestGuide(props) {

    const {province} = props;

    const accessToken = localStorage.jwtToken;

    //Trip date
    let tripdate = '10-10-2022';

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
        }).catch((error) => {
            console.log(error);
        })
    }

    const displayDetails = (props) => {

        if (guide.length > 0) {
            return (
                guide.slice(0)
                    .reverse().map((guide, index) => {
                        //console.log(guide);
                        //console.log(index);
                        if (guide.province == province) {
                            return (
                                <div className="d-flex flex-column w-100 mb-2">
                                    <label className="mr-2 trip-request-suggest" value={index}>{guide.firstname} {" "} {guide.lastname}</label>
                                    <label className="guide-option-overall">Overall Ratings : {guide.overrall}%</label>
                                    <div className="ml-3 d-flex flex-column w-100">
                                        <lable className="mr-2 w-75">Security - {guide.securityoverrall}%</lable>
                                        <label className="mr-2 w-75">Communication - {guide.communicationoverrall}%</label>
                                        <label className="mr-2 w-75">Domain knowledge - {guide.domainknowledgeoverrall}%</label>
                                        <label className="mr-2 w-75">Punctuality - {guide.punctualityoverrall}%</label>
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

export default SuggestGuide;
