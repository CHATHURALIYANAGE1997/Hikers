import React, { useState } from "react";
import {Link} from "react-router-dom";
import './admintranspotation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import profile from './Picture.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import TransporterShowModal from "./TransporterShowModal";
import avishi from './avishi.jfif';
import subha from './subha.jfif';
import chathura from './chathura.jfif';
import kasun from './kasun.jfif';
import sadun from './sandun.jfif';
import pramith from './pramith.jfif';

function AllTransportProviders() {

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="d-flex flex-column all-hotels-container">
            <div className="d-flex flex-row justify-content-between">
                <h4>Current Transport Service Providers</h4>
                <Link to={"/admin/addtransporter"} ><button className="all-hotels-add-btn"><FontAwesomeIcon icon={faPlus} className="all-hotels-icon" />New Transporter</button></Link>

            </div>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={kasun} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Kasun Perera</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <TransporterShowModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
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
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={pramith} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Pramith Kamilka</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <TransporterShowModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={chathura} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Chathura Liyanage</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <TransporterShowModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div className="all-hotels-icons">
                    <img src={sadun} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Sandun De Silva</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <TransporterShowModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={subha} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Subha Jayaweera</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <TransporterShowModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={avishi} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Avishi Jayaweera</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <TransporterShowModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={profile} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Kasun Perera</span>
                    <button onClick={() => setModalShow(true)} className="all-articles-see-more-btn">see more..</button>
                    <TransporterShowModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} onClick={handleShow} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
        </div>
    );
}

export default AllTransportProviders;