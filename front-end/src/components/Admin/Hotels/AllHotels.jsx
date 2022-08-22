import React, { useState } from "react";
import './adminhotels.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import HotelShowModal from './HotelShowModal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function AllHotels() {
    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="d-flex flex-column all-hotels-container">
            <div className="d-flex flex-row justify-content-between">
                <h4>Current Hotels</h4>
                <Link to={"/admin/addhotel"}><button className="all-hotels-add-btn"><FontAwesomeIcon icon={faPlus} className="all-hotels-icon" />New Hotel</button></Link>
            </div>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">Araliya Villa & Spa - Sigiriya</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                </div>
                <HotelShowModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Hotel</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you want to delete this hotel?</Modal.Body>
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
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">The Epitome - Kurunegala</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">White House - Dambulla</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                </div>
                <HotelShowModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">SriLan - Galle</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                </div>
                <HotelShowModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">LightHouse - Galle</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                </div>
                <HotelShowModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">Amari - Ginthota</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                </div>
                <HotelShowModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div className="d-flex flex-column">
                    <span className="all-articles-title">Araliya Villa Spa - Sigiriya</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                </div>
                <HotelShowModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />                <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
        </div>
    );
}

export default AllHotels;