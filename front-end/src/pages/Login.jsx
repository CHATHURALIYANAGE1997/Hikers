import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../services/index";
import { useTitle } from "../components/Title/Title"

import Navigationbar from "../components/Signup/Navigationbar";
import signinpic from "../components/images/signinpic.jpg";

import { Alert, } from "react-bootstrap";

const Login = (props) => {

    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const initialState = {

        email: "",
        password: "",
    };

    const [user, setUser] = useState(initialState);

    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const dispatch = useDispatch();

    const validateUser = () => {
        // console.log(user);
        dispatch(authenticateUser(user.email, user.password))
            .then((response) => {
                console.log(response.data);
                return props.history.push("/home");
            })
            .catch((error) => {
                console.log(error.message);
                setShow(true);
                resetLoginForm();
                setError("Invalid email and password");
            });
    };

    const resetLoginForm = () => {
        setUser(initialState);
    };

    useTitle("Hikers")

    return (

        <div>
            <Navigationbar />

            <div className="mt-5 p-5 text-left container">
                <div class="shadow p-3 mb-5 bg-white rounded ">
                    <img src={signinpic} className="float-left signinpic" alt="signuppic"></img>
                    <h1 className="p-2 text-center">Hello, <br></br>Welcome Back</h1>

                    <form class="row g-3">
                        <div className="col-12">

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
                        <div class="col-12">

                            <br></br>
                            <input type="email" class="form-control" placeholder="Email-Address" value={user.email} onChange={credentialChange} name="email" />
                        </div>
                        <div class="col-12">
                            <br></br>
                            {/* <Passwordhidden value={user.password} onChange={credentialChange} name="password"/> */}
                            <input className="password-field" type="password" class="form-control" placeholder="Password" value={user.password} onChange={credentialChange} name="password" />

                        </div>
                        <div class="col-6">
                            <div class="mt-3 form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Remember Password
                                </label>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="mt-3 form-check">

                                <a href="url">Forgot Password</a>
                            </div>
                        </div>
                        <div class="col-6 mt-3 mx-auto text-center loginbtn">
                            <button class="btn btn-primary" type="submit" type="button" variant="success" onClick={validateUser} >Login</button>
                        </div>
                    </form>
                </div>


            </div>
        </div >
    )
}


export default Login