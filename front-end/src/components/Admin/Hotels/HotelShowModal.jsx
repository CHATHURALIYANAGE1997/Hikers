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
                    <Modal.Title id="contained-modal-title-vcenter text-capitalize">
                        {hotelId.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Hotel name </span>
                                <span className='w-50'>: {hotelId.name} </span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Province </span>
                                <span className='w-50'>: {hotelId.province}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Address </span>
                                <span className='w-50'>: {hotelId.address}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Email address </span>
                                <span className='w-50'>: {hotelId.email}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Phone number </span>
                                <span className='w-50'>: {hotelId.contactNumber}</span>
                            </div>

                        </div>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
            {displayDetails(props)}
        </>

    )

}

export default HotelShowModal;