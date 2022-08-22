import React from "react";
import signin from "../components/Signin/signin.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../services/index";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useTitle } from "../components/Title/Title"
import Navbar from "../components/Navbar/Navbar";
import signinpic from "../components/Signin/signinpic.jpg";
import { Alert, } from "react-bootstrap";
import {Link} from "react-router-dom";

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
               // console.log(response.data);
                if(response.data.role==="Admin") {
                    return props.history.push("/admin/home"); }
                if(response.data.role==="User") {
                    return props.history.push("/welcome");
                }
                if(response.data.role === "Travelguide"){
                    return props.history.push("/guide/profile");
                }
                if(response.data.role === "Eqprovider"){
                    return props.history.push("/camping");
                }
                if(response.data.role === "Hotel"){
                    return props.history.push("/hotel/profile");
                }
                if(response.data.role === "Traprovider"){
                    return props.history.push("/transportservice/profile");
                }
                else {
                    return props.history.push("/");
                }
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

    // const [passwordType, setPasswordType] = useState('password')
    // const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />);

    // const handelToggle = () => {
    //     if (passwordType === 'password') {
    //         setPasswordType('text');
    //         setPasswordIcon(FaEye);
    //     } else {
    //         setPasswordType('password');
    //         setPasswordIcon(FaEyeSlash);
    //     }
    // }

    useTitle("Hikers")

    return (

        <div>
            <Navbar />

            <div className="mt-5 p-5 text-left signincontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 card flex-row mx-auto shadow p-3 mb-5 bg-white rounded ">
                        <div className="d-none d-md-flex loginimage">
                            <img src={signinpic} className="float-left signinpic" alt="signuppic"></img>
                        </div>
                        <form class="loginform-box px-3 row g-3">
                            <div className="login-body">
                                <h1 className="p-2 text-center">Hello, <br></br>Welcome to HIKERS</h1>
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
                                        {/* <span className="loginiconem"><i class="fa fa-envelope-o"></i></span> */}
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
                                {/* <span className="loginiconpw"><i class="fa fa-key"></i></span> */}
                                <input className="password-field" type="password" class="form-control" placeholder="Password" value={user.password} onChange={credentialChange} name="password" />

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
                                <button class="btn btn-primary" type="submit" type="button" variant="success" onClick={validateUser} >Login</button>
                            </div>
                            <hr ></hr>
                            <div class="text-center mb-2">
                                Don't have an account? <Link to={"/signup"}>Register Here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div >
    )
}


export default Login
