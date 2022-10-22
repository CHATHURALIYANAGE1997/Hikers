import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function HotelShowModal(props) {

    const { hotelId } = props;

    const displayDetails = (props) => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Arliya Villa & Spa - Sigiriya
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        The place is just off from Galle road and the access is straightforward. The place is charming as its next to Maadu ganga, location is relaxing and peaceful.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }


}

export default HotelShowModal;