import * as React from 'react';
import './hotelroom.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const AddPackageForm = (props) => {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Package
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='d-flex flex-column w-75 add-article-form'>
                    <div className="add-article-form-container">
                        <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                            <Form.Label className="add-articles-label">Package name</Form.Label>
                            <Form.Control type="text" placeholder="Enter package name" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                            <Form.Label>Number of sleeps</Form.Label>
                            <Form.Control type="number" placeholder="Enter number of sleeps" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                            <Form.Label>Number of single beds</Form.Label>
                            <Form.Control type="number" />
                            <Form.Label>Number of double beds</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                            <Form.Label>Facilities</Form.Label>
                            <Form.Control type="text" placeholder="Enter available facilities" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                            <Form.Label>Food facilities</Form.Label>
                            <Form.Check
                                label="Breakfast"
                                name="group1"
                                id={`breakfast`}
                            />
                            <Form.Check
                                label="Lunch"
                                name="group2"
                                id={`lunch`}
                            />
                            <Form.Check
                                label="Dinner"
                                name="group3"
                                id={`dinner`}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                            <Form.Label>Price (LKR)</Form.Label>
                            <Form.Control type="text" placeholder="Enter package price" />
                        </Form.Group>
                    </div>
                </Form>
            </Modal.Body>
            <Modal.Footer className='addform-footer'>
                <Button onClick={props.onHide} className='addform-close-btn w-25'>Close</Button>
                <Button onClick={props.onHide} variant="primary" type="submit" className='addform-submit-btn w-25'>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );

}

export default AddPackageForm;