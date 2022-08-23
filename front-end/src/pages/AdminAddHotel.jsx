import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AddHotelForm from "../components/Admin/Hotels/AddHotelForm";
import authToken from "../utils/authToken";
import { useSelector,useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NotFoundPage from "./NotFoundPage";
import "../components/Admin/Hotels/adminhotels.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Alert, } from "react-bootstrap";
const AdminAddHotel = (props) => {
    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);
    if (auth.isLoggedIn === true && auth.role === "Admin") {


        const [error, setError] = useState();
        const [show, setShow] = useState(true);

        const initialState = {

            name: "",
            email:"",
            password:"",
            province: "",
            address:"",
            img1:"",
            img2:""
        };

        const [user, setUser] = useState(initialState);

        const credentialChange = (event) => {
            const { name, value } = event.target;
            setUser({ ...user, [name]: value });

        };

        const dispatch = useDispatch();

        const addHotel = () => {
            const api='http://localhost:8080/user/signuphotel';
            const token=localStorage.jwtToken;
            axios.post(api,user,{
                headers:{
                    Authorization: `Bearer ${token}`,
                },
            }).then((response)=>{
                console.log(response);
                setShow(true);
                resetLoginForm();
                setError("Successfuly Added")

            }).catch((error)=>{
                console.log(error.message);
                setShow(true);

                setError("Invalid email and password");
            })
        };
        const resetLoginForm = () => {
            setUser(initialState);
        };

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
                                <div>
                                    {show && props.message && (
                                        <Alert variant="success" onClose={() => setShow(false)} dismissible>
                                            {props.message}
                                        </Alert>
                                    )}
                                    {show && error && (
                                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                            {error}
                                        </Alert>
                                    )}
                                </div>
                                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                                    <Form.Label>Hotel Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter mountain" value={user.name} onChange={credentialChange} name="name"/>
                                </Form.Group>

                                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control type="text" placeholder="Province" value={user.province} onChange={credentialChange} name="province"/>
                                </Form.Group>

                                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Address" value={user.address} onChange={credentialChange} name="address"/>
                                </Form.Group>

                                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                    <Form.Label>Upload Front Photo</Form.Label>
                                    <Form.Control type="file" className="form-control" value={user.img1} onChange={credentialChange} name="img1"/>
                                </Form.Group>

                                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                    <Form.Label>Upload Inside Photos</Form.Label>
                                    <Form.Control type="file" className="form-control" value={user.img2} onChange={credentialChange} name="img2"/>
                                </Form.Group>

                                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password" className="form-control" value={user.password} onChange={credentialChange} name="password"/>
                                </Form.Group>

                                <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control type="email" className="form-control" value={user.email} onChange={credentialChange} name="email"/>
                                </Form.Group>

                                <Button variant="primary" type="submit" type="button" variant="success" onClick={addHotel} className='w-100'>
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