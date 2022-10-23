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

function GuideOption(props) {

    const accessToken = localStorage.jwtToken;

    //Trip province
    let province = "Southern";

    //Trip date
    let tripdate = '10-10-2022';

    const url2 = 'http://localhost:8080/travelingguide/getAllGuide';

    const [guide, setGuide] = useState('');

    useEffect(() => {
        getAllTransporters();
    }, []);

    const getAllTransporters = () => {
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
                guide.map((guide, index) => {
                    //console.log(guide);
                    //console.log(index);
                    if (guide.province == province) {
                        return (
                            <option value={index}>{guide.firstname} {" "} {guide.lastname}</option>
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

export default GuideOption;