import React, { useState } from "react";
import './adminhotels.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import HotelShowModal from './HotelShowModal';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function AllHotels(props) {

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const displayNotes = (props) => {

        const { notes } = props;

        if (notes.length > 0) {
            return (
                notes.map((note, index) => {
                    console.log(note);
                    return (
                        <>
                            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                                <div className="d-flex flex-column">
                                    <span className="all-articles-title">{note.name} - {note.province}</span>
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
                                    <Modal.Body>Do you want to delete hotel?</Modal.Body>
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
                    )
                })
            );
        }
    }

    return (
        <>
            {displayNotes(props)}
        </>
    )
}

// export default AllHotels;