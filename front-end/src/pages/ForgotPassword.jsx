import React, {useState} from "react"
import signin from "../components/Signin/signin.css"
import forgotpassword from "../components/Signin/forgotpassword.png";
import Navbar from "../components/Navbar/Navbar";
import { useTitle } from "../components/Title/Title"
import {useDispatch} from "react-redux";
import {nav} from "../services/user/userActions";
import {Alert} from "react-bootstrap";


const ForgotPassword = (props) => {


        const [error, setError] = useState();
        const [show, setShow] = useState(true);

        const initialState = {
            email: ""
        };

        const [user, setUser] = useState(initialState);
        const credentialChange = (event) => {
            const { name, value } = event.target;
            setUser({ ...user, [name]: value });

        };

        const dispatch = useDispatch();

    const nav1 = () => {
        dispatch(nav(user)).then((response) => {
            resetLoginForm();
            setShow(true);
            setError("Check Your Email")
        }).catch((error) => {
            console.log(error.message);
            setShow(true);
            resetLoginForm();
            setError("Invalid data");
        });
    };

    const resetLoginForm = () => {
        setUser(initialState);
    };

    useTitle("Hikers")

    return (
        <div>
            <Navbar />
            <div className="mt-5 p-5 text-left signincontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 card flex-row mx-auto shadow p-3 mb-5 bg-white rounded ">
                        <div className="d-none d-md-flex loginimage">
                            <img src={forgotpassword} className="float-left signinpic" alt="signuppic"></img>
                        </div>
                        <div className="login-body">
                            <h1 className="forgotpasswordh1">Forgot Password? </h1>
                            <form>
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
                            <p className="forgotpasswordp">Enter the email-address associated with your account</p>
                                <div class="forgotpasswordform">
                                    <label type={"email"}  name="email" >Email Address</label>
                                    <br/>
                                    <input type={"email"} value={user.email} onChange={credentialChange} name="email" class="form-control forgotpasswordemail" id="email"/>
                                </div>
                                <br/>
                                <div class="col-6 mt-3 mx-auto text-center loginbtn">
                                    <button  type="submit" type="button" onClick={nav1} class="btn btn-primary">Reset Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default ForgotPassword
