import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './admintranspotation.css';

function AddTransporterForm() {
    return (
        <Form className='d-flex flex-column w-75 add-article-form'>
            <h4>Transport Service Provider Form</h4>

            <div className="add-article-form-container">
                <h6>Personal Details</h6>
                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                    <Form.Label className="add-articles-label">First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>NIC</Form.Label>
                    <Form.Control type="text" placeholder="Enter NIC" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Province</Form.Label>
                    <Form.Control type="text" placeholder="Enter province" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Upload Profile Photo</Form.Label>
                </Form.Group>

                <h6>Vehicle Details</h6>
                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                    <Form.Label className="add-articles-label">Vehicle Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter vehicle type" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Vehicle Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter vehicle number" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Maximum Passenger Count</Form.Label>
                    <Form.Control type="number" min={1} placeholder="Enter passenger count" />
                </Form.Group>

                <Button variant="primary" type="submit" className='w-50'>
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default AddTransporterForm;