import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AddTransporterForm from "../components/Admin/Transpotation/AddTransporterForm";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NotFoundPage from "./NotFoundPage";

const AdminAddTransporter = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);
    if (auth.isLoggedIn === true && auth.role === "Admin") {

        return (
            <div className="d-flex flex-column w-100">
                <AdminHeader />
                <div className="d-flex flex-row w-100 admin-page-content">
                    <AdminNav />
                    <div className="d-flex flex-column home-container">
                        <div className="d-flex flex-row">
                            <Form className='d-flex flex-column w-75 add-article-form'>
                            <Link to={"/admin/transportation"} className="back-btn-link">
                            <button type="button" className="back-btn">
                                <FontAwesomeIcon icon={faArrowLeft} className="back-btn-icon" />
                            </button>
                            </Link>
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
                                        <Form.Control type="file" className="form-control" />
                                    </Form.Group>

                                    <h6 className="add-transport-vehicle">Vehicle Details</h6>
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

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Upload Vehicle Photo</Form.Label>
                                        <Form.Control type="file" className="form-control" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" className='w-50'>
                                        Submit
                                    </Button>
                                </div>
                            </Form>                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        {return <div><NotFoundPage/></div>}

    }
}

export default AdminAddTransporter;