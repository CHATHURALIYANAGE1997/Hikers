import React, { useState } from "react";
import { Link } from "react-router-dom";
import './admintranspotation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TransporterShowModal from "./TransporterShowModal";
import kasun from './kasun.jfif';


export default function AllTransportProviders(props) {

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [transporterId, setTransporterId] = useState('');

    const handleTransporterClick = (e) => {
        setTransporterId(e);
    }

    const displayTransport = (props) => {

        const { transports } = props;

        if (transports.length > 0) {
            return (
                transports.map((transports, index) => {
                    console.log(transports);
                    return (
                        <>
                            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                                <div>
                                    <img src={kasun} className="all-transporter-profile-img" alt="Profile Picture"></img>
                                    <span className="all-transpotation-provider-name">{transports.firstname} {" "} {transports.lastname} - {transports.province}</span>
                                    <button onClick={() => {setModalShow(true); handleTransporterClick(transports);}} className="all-articles-see-more-btn">see more..</button>
                                    <TransporterShowModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                        transporterId={transporterId}
                                    />
                                </div>
                                <div className="all-hotels-icons">
                                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                                </div>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Delete Transport Service Provider</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Do you want to delete this transport service provider?</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Delete
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <hr className="all-hotels-hr" />
                        </>
                    );
                })
            )
        }

    }

    return(
        <>
        {displayTransport(props)}
        </>
    )

}

// export default AllTransportProviders;