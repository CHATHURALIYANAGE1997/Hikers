import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import profile from './Profile.jpg';


function TransporterShowModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                <img src={profile} className="valuable-customer-profile-img mr-3" alt="Profile Picture"></img>
                    Kasun Perera
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5></h5>
                <p>
                    <div className='d-flex flex-column w-100'>
                        <div className='d-flex flex-row mb-2'>
                            <span className='w-25'>Full name </span>
                            <span className='w-50'>: Kasuna Perera</span>
                        </div>
                        <div className='d-flex flex-row mb-2'>
                            <span className='w-25'>Address </span>
                            <span className='w-50'>: 22, Kanda Rd, Ambalangoda</span>
                        </div>
                        <div className='d-flex flex-row mb-2'>
                            <span className='w-25'>NIC </span>
                            <span className='w-50'>: 891234567V</span>
                        </div>
                        <div className='d-flex flex-row mb-2'>
                            <span className='w-25'>Email address </span>
                            <span className='w-50'>: kasunperera@gmail.com</span>
                        </div>
                        <div className='d-flex flex-row mb-2'>
                            <span className='w-25'>Vehicle type </span>
                            <span className='w-50'>: Car</span>
                        </div>
                        <div className='d-flex flex-row mb-2'>
                            <span className='w-25'>Vehicle number </span>
                            <span className='w-50'>: CBA-1234</span>
                        </div>
                        <div className='d-flex flex-row mb-2'>
                            <span className='w-25'>Maximun Passenger Count</span>
                            <span className='w-50'>: 04</span>
                        </div>
                        <div className='d-flex flex-row mb-2'>
                            <span className='w-25'>Ratings </span>
                            <span className='w-50'>: 7.3/10</span>
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

export default TransporterShowModal;