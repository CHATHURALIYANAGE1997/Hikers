import React, { useState } from "react";
import './admintrips.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';


function TrnasportOption(props) {

    const [open, setOpen] = useState(false);

    const { details } = props;

    const displayDetails = (props) => {

        if (details.length > 0) {
            return (
                details.map((details, index) => {
                    console.log(details);
                    console.log(index);
                    return (
                        <option value={index}>{details.firstname} {" "} {details.lastname}</option>
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