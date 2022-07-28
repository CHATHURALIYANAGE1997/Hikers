import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../services/index";
import { useTitle } from "../components/Title/Title"
import signin from "../components/Signin/signin.css"
import Navigationbar from "../components/Signup/Navigationbar";
import signinpic from "../components/images/signinpic.jpg";
import Passwordhidden from "../components/Signup/Passwordhidden"
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
                //  console.log(response.data);
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
                            {/* <br></br> */}
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




        // <div>
        //     <div class="container-fluid ps-md-0">
        //         <div class="row g-0">
        //             <div class="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        //             <div class="col-md-8 col-lg-6">
        //                 <div class="login d-flex align-items-center py-5">
        //                     <div class="container">
        //                         <div class="row">
        //                             <div class="col-md-9 col-lg-8 mx-auto">
        //                                 <h3 class="login-heading mb-4">Welcome To Hikers!</h3>

        //                                 <form>
        //                                     <div class="form-floating mb-3">
        //                                         <input type="email" class="form-control" value={user.email} onChange={credentialChange} placeholder="name@example.com" name="email" />
        //                                         <label for="floatingInput" >Email address</label>
        //                                     </div>
        //                                     <div class="form-floating mb-3">
        //                                         <input type="password" class="form-control" id="floatingPassword" value={user.password}  onChange={credentialChange} placeholder="Password" name="password"/>
        //                                         <label for="floatingPassword" >Password</label>
        //                                     </div>

        //                                     <div class="form-check mb-3">
        //                                         <input class="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
        //                                         <label class="form-check-label" for="rememberPasswordCheck">
        //                                             Remember password
        //                                         </label>
        //                                     </div>
        //                                 </form>
        //                                     <div class="d-grid">
        //                                         <button class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="button" variant="success"  onClick={validateUser}>Sign in</button>

        //                                         <div class="text-center">
        //                                             <a class="small" >Forgot password?</a>
        //                                         </div>
        //                                     </div>

        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}


export default Login