import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ModeCommentOutlined } from "@material-ui/icons";

function AddFacilityForm(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Hotel Facility Forum
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className='d-flex flex-column w-75 add-article-form'>
                    <div className="add-article-form-container">
                        <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                            <Form.Label className="add-articles-label">Facility Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Facility" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                            <Form.Label>Facility Description</Form.Label>
                            <Form.Control type="textarea" className="add-article-form-description" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className='w-100'>
                            Submit
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddFacilityForm;