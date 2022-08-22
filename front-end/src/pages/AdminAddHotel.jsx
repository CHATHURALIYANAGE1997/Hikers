import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AddHotelForm from "../components/Admin/Hotels/AddHotelForm";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NotFoundPage from "./NotFoundPage";
import "../components/Admin/Hotels/adminhotels.css";
import {Link} from "react-router-dom";

const AdminAddHotel = (props) => {
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
                        {/* <AddHotelForm /> */}

                        <Form className='d-flex flex-column w-75 add-article-form'>
                            <Link to={"/admin/hotels"} className="back-btn-link">
                            <button type="button" className="back-btn">
                                <FontAwesomeIcon icon={faArrowLeft} className="back-btn-icon" />
                            </button>
                            </Link>
                            <h4>Hotel Form</h4>
                            <div className="add-article-form-container">
                                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                                    <Form.Label>Hotel Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter mountain" />
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
                                    <Form.Label>Upload Inside Photos</Form.Label>
                                    <Form.Control type="file" className="form-control" />
                                </Form.Group>

                                <Button variant="primary" type="submit" className='w-100'>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
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

export default AdminAddHotel;