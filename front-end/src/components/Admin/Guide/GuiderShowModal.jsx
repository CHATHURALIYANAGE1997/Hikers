import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import profile from './Profile.jpg';


function GuiderShowModal(props) {

    const { guideId } = props;

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
                        <span className='text-capitalize'>{"  "}{guideId.firstname} {" "} {guideId.lastname}</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5></h5>
                    <p>
                        <div className='d-flex flex-column w-100'>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Full name </span>
                                <span className='w-50'>: {guideId.firstname} {" "} {guideId.lastname}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Address </span>
                                <span className='w-50'>: {guideId.address}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>NIC </span>
                                <span className='w-50'>: {guideId.nic}</span>
                                <span className='w-25'>NIC image</span>
                                <span className='w-50'>: {guideId.nic_image}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Email address </span>
                                <span className='w-50'>: {guideId.email}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Date of Birth </span>
                                <span className='w-50'>: {guideId.dob}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Phone number </span>
                                <span className='w-50'>: {guideId.contactNumber}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Experience</span>
                                <span className='w-50'>: {guideId.maximum_passengers}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Police report</span>
                                <span className='w-50'>: {guideId.police_report}</span>
                            </div>
                            <div className='d-flex flex-row mb-2'>
                                <span className='w-25'>Ratings </span>
                                <span className='w-50'>: {guideId.rate}/10</span>
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

export default GuiderShowModal;