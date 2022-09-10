import React, { useState } from "react";
import { Link } from "react-router-dom";
import './admintranspotation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import AllTransportProviders from "./AllTransportProviders";


export default function TransportList(props) {

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const { transports } = props;


    return (
        <div className="d-flex flex-column all-hotels-container">
            <div className="d-flex flex-row justify-content-between">
                <h4>Current Transport Service Providers</h4>
                <Link to={"/admin/addtransporter"} ><button className="all-hotels-add-btn"><FontAwesomeIcon icon={faPlus} className="all-hotels-icon" />New Transporter</button></Link>

            </div>

            <AllTransportProviders transports={transports} />

        </div>
    );



}

// export default AllTransportProviders;