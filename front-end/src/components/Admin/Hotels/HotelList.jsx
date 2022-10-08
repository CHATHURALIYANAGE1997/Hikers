import React, { useState } from "react";
import './adminhotels.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import HotelShowModal from './HotelShowModal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import AllHotels from "./AllHotels";


export default function HotelList(props) {

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {notes} = props;

    return (
        <div className="d-flex flex-column all-hotels-container">
            <div className="d-flex flex-row justify-content-between">
                <h4>Current Hotels</h4>
                <Link to={"/admin/addhotel"}><button className="all-hotels-add-btn"><FontAwesomeIcon icon={faPlus} className="all-hotels-icon" />New Hotel</button></Link>
            </div>

            <AllHotels  notes={notes}/>
            
        </div>
    )
}

// export default AllHotels;