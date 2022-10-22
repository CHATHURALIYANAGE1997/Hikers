import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import profile from './Profile.jpg';


function TransporterShowModal(props) {

    const { transporterId } = props;

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
                        <img src={profile} className="valuable-customer-profile-img mr-3" alt="Profile Picture"></img>
                        {"  "}{transporterId.firstname} {" "} {transporterId.lastname}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5></h5>
                    <p>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Full name </span>
                                <span className='w-50 text-capitalize'>: {transporterId.firstname} {" "} {transporterId.lastname}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Address </span>
                                <span className='w-50 text-capitalize'>: {transporterId.address}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Contact Number </span>
                                <span className='w-50'>: {transporterId.contactNumber}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>NIC </span>
                                <span className='w-50'>: {transporterId.nic}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Email address </span>
                                <span className='w-50'>: {transporterId.email}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Vehicle type </span>
                                <span className='w-50'>: {transporterId.vehicle_type}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Vehicle number </span>
                                <span className='w-50'>: {transporterId.vehicle_number}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Maximun Passenger Count</span>
                                <span className='w-50'>: {transporterId.maximum_passengers}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Ratings </span>
                                <span className='w-50'>: {transporterId.rate}/10</span>
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

    return(
        <>
            {displayDetails(props)}
        </>

    )

}

export default TransporterShowModal;