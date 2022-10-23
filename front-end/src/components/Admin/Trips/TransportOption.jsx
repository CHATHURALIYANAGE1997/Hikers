import React, { useState } from "react";
import './admintrips.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
import axios from "axios";
import { useEffect } from "react";


function TrnasportOption(props) {

    const accessToken = localStorage.jwtToken;

    const [open, setOpen] = useState(false);

    const { details } = props;

    const url2 = 'http://localhost:8080/transport/gettransport';

    const [transporter, setTransporter] = useState('');

    useEffect(() => {
        getAllTransporters();
    }, []);

    const getAllTransporters = () => {
        axios.get(url2, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allTransporters = response.data;
            setTransporter(allTransporters);
        }).catch((error) => {
            console.log(error);
        })
    }


    const displayDetails = (props) => {

        if (transporter.length > 0) {
            return (
                transporter.map((transporter, index) => {
                    //console.log(transporter);
                    //console.log(index);
                    return (
                        <option value={index}>{transporter.firstname} {" "} {transporter.lastname}</option>
                    );
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

export default TrnasportOption;