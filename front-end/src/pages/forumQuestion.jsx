import React from "react";
import "../components/Forum/Reply/forumreplies.css"
import WelcomeHikers from "../components/WelcomeHikers/welcomeHikers";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import authToken from "../utils/authToken";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";


const forumQuestion = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    const [error, setError] = useState();
    const [show, setShow] = useState(true);
    const [sucees, setSuccess] = useState();

    const initialState = {
        name: "",
        address: "",
        description: "",
    };

    const [user, setUser] = useState(initialState);

    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });

    };

    const dispatch = useDispatch();

    const addQuestion = () => {

        const api = 'http://localhost:8080/user/askque';
        const token = localStorage.jwtToken;
        axios.post(api, user, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            console.log(response);
            setShow(true);
            resetLoginForm();
            setSuccess("Successfuly Added")

        }).catch((error) => {
            console.log(error.message);
            setShow(true);
            resetLoginForm();
            setError("Try Again");
        })


    };

    const resetLoginForm = () => {
        setUser(initialState);
    }

    if (auth.isLoggedIn === true && auth.role === "User") {
        return (
            <div>
                <Navbar />
                <div className="mt-5 p-5 text-left signupcontainer">
                    <div className="row px-3">
                        <div class="col-lg-10 col-xl-9 mx-auto shadow p-3 mb-5 bg-white rounded ">
                            <form id="travelersignup" class="signupform-box px-3 row g-3">
                                <h2 className="guidesuph2">Ask a question in the Travel Forum</h2>
                                <div>
                                    {show && sucees && (
                                        <Alert variant="success" onClose={() => setShow(false)} dismissible>
                                            {sucees}
                                        </Alert>
                                    )}
                                    {show && error && (
                                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                                            {error}
                                        </Alert>
                                    )}
                                </div>
                                <div class="col-2">
                                    <label for="fname">Name</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" class="form-control" value={user.name} onChange={credentialChange} name="name" required />
                                </div>
                                {/* <div class="col-2">
                                <label for="email">Email</label>
                            </div>
                            <div class="col-4">
                                <input type="email" class="form-control" />
                            </div> */}
                                <div class="col-2">
                                    <label for="address">Address</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" class="form-control" value={user.address} onChange={credentialChange} name="address" required />
                                </div>
                                <div class="col-2">
                                    <label for="rate">Question</label>
                                </div>
                                <div class="col-4">
                                    <textarea id="w3review" rows="4" cols="35" value={user.description} onChange={credentialChange} name="description" required />
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <Link to={"/forums"}><button type="button" className=" btn btn-outline-primary forumpreviewbtn" >Back</button></Link>
                                    <Link to={"/forumQuestion"}><button type="submit" type="button" onClick={addQuestion} className="btn btn-primary forumpreviewbtn" >Post your question</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        { return <div><NotFoundPage /></div> }

    }
}
export default forumQuestion