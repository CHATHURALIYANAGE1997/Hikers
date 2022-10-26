import React, { useState } from "react";
import { Link } from "react-router-dom";
import './adminguide.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import GuiderShowModal from "./GuiderShowModal";
import sadun from './sandun.jfif';
import avishi from './avishi.jfif';
import kasun from './kasun.jfif';
import chathura from './chathura.jfif';
import subha from './subha.jfif';


export default function AllGuider(props) {

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [guideId, setGuideId] = useState('');

    const handleGuideClick = (e) => {
        setGuideId(e);
    }

    const profiles = [sadun, avishi, kasun, chathura, subha];

    const displayGuide = (props) => {

        const { guiders } = props;

        if (guiders.length > 0) {
            return (
                guiders.map((guiders, index) => {
                    if (guiders.accountstatus == "ture") {
                        return (
                            <>
                                <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                                    <div>
                                        <img src={profiles[index]} className="all-transporter-profile-img" alt="Profile Picture"></img>
                                        <span className="all-transpotation-provider-name text-capitalize">{guiders.firstname} {" "} {guiders.lastname} - {guiders.address}</span>
                                        <button onClick={() => { setModalShow(true); handleGuideClick(guiders); }} className="all-articles-see-more-btn">see more..</button>
                                        <GuiderShowModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                            guideId={guideId}
                                        />
                                    </div>
                                    <div className="all-hotels-icons">
                                        {/* <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" /> */}
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
                    }
                })
            )
        }

    }

    return (
        <>
            {displayGuide(props)}
        </>
    )

}

// export default AllTransportProviders;