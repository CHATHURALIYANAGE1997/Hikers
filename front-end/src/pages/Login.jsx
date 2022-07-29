import React from "react";
import signin from "../components/Signin/signin.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../services/index";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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

    const [passwordType, setPasswordType] = useState('password')
    const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);

    const handelToggle = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
            setPasswordIcon(FaEye);
        } else {
            setPasswordType('password');
            setPasswordIcon(FaEyeSlash);
        }
    }

    useTitle("Hikers")

    return (

        <div>
            <Navigationbar />

            <div className="mt-5 p-5 text-left signincontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 card flex-row mx-auto shadow p-3 mb-5 bg-white rounded ">
                        <div className="d-none d-md-flex loginimage">
                            <img src={signinpic} className="float-left signinpic" alt="signuppic"></img>
                        </div>
                        <form class="loginform-box px-3 row g-3">
                        <div className="login-body">
                            <h1 className="p-2 text-center">Hello, <br></br>Welcome Back</h1>
                            {/* <form class="loginform-box px-3 row g-3"> */}
                                <div class="loginform-input col-12">

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
                                    <div class="loginform-input">
                                    <span className="loginiconem"><i class="fa fa-envelope-o"></i></span>
                                    <input type="email" class="form-control" placeholder="Email-Address" value={user.email} onChange={credentialChange} name="email" />
                                    </div>
                                </div>
                               
                        </div>
                        <div class="col-12">
                            <br></br>
                            {/* {<Passwordhidden value={user.password} onChange={credentialChange} name="password"/> }
                                    <input className="password-field" type="password" class="form-control" placeholder="Password" value={user.password} onChange={credentialChange} name="password" />*/ }

                        </div>
                        <div class="loginform-input">
                            <span className="loginiconpw"><i class="fa fa-key"></i></span>
                            <input className="password-field" type={passwordType} class="form-control" placeholder="Password" value={user.password} onChange={credentialChange} name="password" />
                            <span className="pbtn" onClick={handelToggle}>
                                {passwordIcon}
                            </span>
                        </div>
                        <div class="col-6">
                            <div class="mt-3 form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="mt-3 form-check">

                                <a href="url">Forgot Password</a>
                            </div>
                        </div>
                        <div class="col-6 mt-3 mx-auto text-center loginbtn">
                            <button class="btn btn-primary" type="submit" variant="success" onClick={validateUser} >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

            </div >
    )
}


export default Login