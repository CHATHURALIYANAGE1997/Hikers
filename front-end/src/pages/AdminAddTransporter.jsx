import React, {useState} from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AddTransporterForm from "../components/Admin/Transpotation/AddTransporterForm";
import authToken from "../utils/authToken";
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import {Alert} from "react-bootstrap";

const AdminAddTransporter = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const initialState = {
        firstname:"",
        lastname:"",
        email: "",
        address:"",
        nic:"",
        province:"",
        profileimg:"",
        vehicletype:"",
        vehiclenum:"",
        maxpassenger:"",
        vehicleimg:"",
        password: ""
    };

    const [user, setUser] = useState(initialState);

    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });

    };

    const dispatch = useDispatch();

    const addTransport = () => {
        const api='http://localhost:8080/user/signuptransportprovider';
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
            resetLoginForm();
            setError("Invalid email and password");
        })
    };
    const resetLoginForm = () => {
        setUser(initialState);
    };

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
                                        <Form.Label className="add-articles-label">First Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name" value={user.firstname} onChange={credentialChange} name="firstname" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name" value={user.lastname} onChange={credentialChange} name="lastname"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={credentialChange} name="email"/>
                                    </Form.Group>
                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter email" value={user.password} onChange={credentialChange} name="password"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Enter address" value={user.address} onChange={credentialChange} name="address"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>NIC</Form.Label>
                                        <Form.Control type="text" placeholder="Enter NIC" value={user.nic} onChange={credentialChange} name="nic"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Province</Form.Label>
                                        <Form.Control type="text" placeholder="Enter province" value={user.province} onChange={credentialChange} name="province"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Upload Profile Photo</Form.Label>
                                        <Form.Control type="file" className="form-control" value={user.profileimg} onChange={credentialChange} name="profileimg"/>
                                    </Form.Group>

                                    <h6 className="add-transport-vehicle">Vehicle Details</h6>
                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicEmail">
                                        <Form.Label className="add-articles-label">Vehicle Type</Form.Label>
                                        <Form.Control type="text" placeholder="Enter vehicle type" value={user.vehicletype} onChange={credentialChange} name="vehicletype"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Vehicle Number</Form.Label>
                                        <Form.Control type="text" placeholder="Enter vehicle number" value={user.vehiclenum} onChange={credentialChange} name="vehiclenum"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Maximum Passenger Count</Form.Label>
                                        <Form.Control type="number" min={1} placeholder="Enter passenger count" value={user.maxpassenger} onChange={credentialChange} name="maxpassenger"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3 w-100 add-article-form-input" controlId="formBasicPassword">
                                        <Form.Label>Upload Vehicle Photo</Form.Label>
                                        <Form.Control type="file" className="form-control" value={user.vehicleimg} onChange={credentialChange} name="vehicleimg"/>
                                    </Form.Group>

                                    <Link to={"/admin/transportation"}><Button variant="primary" type="submit" onClick={addTransport} className='w-50'>
                                        Submit
                                    </Button></Link>
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

export default AdminAddTransporter;