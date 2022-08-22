import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './adminhotels.css';


function AddHotelForm() {
    return (
        <Form className='d-flex flex-column w-75 add-article-form'>
            
           
            <div className="add-article-form-container">
                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                    <Form.Label>Hotel Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter mountain" />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Province</Form.Label>
                    <Form.Control type="text" placeholder="Province" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Upload Front Photo</Form.Label>
                    <Form.Control type="file" className="form-control" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Upload Inside Photo</Form.Label>
                    <Form.Control type="file" className="form-control" />
                </Form.Group>

                <Button variant="primary" type="submit" className='w-100'>
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default AddHotelForm;