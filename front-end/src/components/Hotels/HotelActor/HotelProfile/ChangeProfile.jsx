import * as React from 'react';
import './hotelprofile.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const ChangeProfile = (props) => {

    const {profileId} = props;

    const displayDetails = (props) => {
        console.log(profileId);
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Change Hotel Details..
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='d-flex flex-column w-75 add-article-form'>
                        <div className="add-article-form-container">
                            <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                                <Form.Label className="add-articles-label">Address</Form.Label>
                                <Form.Control type="text" readOnly defaultValue={profileId.address} />
                            </Form.Group>
    
                            <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="text" defaultValue={profileId.contactNumber} />
                            </Form.Group>
    
                            <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" defaultValue={profileId.email} />
                            </Form.Group>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer className='addform-footer'>
                    <Button onClick={props.onHide} className='addform-close-btn w-25'>Close</Button>
                    <Button onClick={props.onHide} variant="primary" type="submit" className='addform-submit-btn w-25'>
                        Change
                    </Button>
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

export default ChangeProfile;