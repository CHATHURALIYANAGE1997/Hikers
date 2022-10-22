import React from "react";
import "./rateTransport.css"
import Form from 'react-bootstrap/Form';

const RateTripinfor = () => {
    return (
        <div>
            <form id="travelersignup" class="signupform-box px-3 row g-3">
            <div class="col-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" />
                    <Form.Text className="text-muted">
                        First Name
                    </Form.Text>
                </Form.Group>
            </div>
            <div class="col-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" />
                    <Form.Text className="text-muted">
                        Last Name
                    </Form.Text>
                </Form.Group>
            </div>
            <div class="col-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" />
                    <Form.Text className="text-muted">
                        Email-address
                    </Form.Text>
                </Form.Group>
            </div>
            <div class="col-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="tel" />
                    <Form.Text className="text-muted">
                        Phone Number
                    </Form.Text>
                </Form.Group>
            </div>
            <div class="col-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" />
                    <Form.Text className="text-muted">
                        Location
                    </Form.Text>
                </Form.Group>
            </div>
            <div class="col-6">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="date" />
                    <Form.Text className="text-muted">
                        Day Visited
                    </Form.Text>
                </Form.Group>
            </div>
            </form>
        </div>
    );
}
export default RateTripinfor;