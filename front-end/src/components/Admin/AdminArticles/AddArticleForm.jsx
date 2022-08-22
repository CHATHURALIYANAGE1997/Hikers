import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './adminarticles.css';

function AddArticleForm() {
    return (
        <Form className='d-flex flex-column w-75 add-article-form'>
            <h4>Article Form</h4>
            <div className="add-article-form-container">
                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                    <Form.Label className="add-articles-label">Mountain Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter mountain" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Province</Form.Label>
                    <Form.Control type="text" placeholder="Province" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="textarea" className="add-article-form-description" />
                </Form.Group>

                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                    <Form.Label>Upload Photos</Form.Label>
                </Form.Group>

                <Button variant="primary" type="submit" className='w-100'>
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default AddArticleForm;