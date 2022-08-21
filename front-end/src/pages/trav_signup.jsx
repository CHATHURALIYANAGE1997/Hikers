import React, {useState} from "react"
import signup from "../components/Signup/signup.css"
import Phone from "../components/Signup/Phone.js"
import Navbar from "../components/Navbar/Navbar";
import signuppic from "../components/Signup/signuppic.jpg";
import Passwordhidden from "../components/Signup/Passwordhidden"
import BasicInfo from "../components/Signup/BasicInfo";
import Password from "../components/Signup/Password";
import {Link} from "react-router-dom";

import { useTitle } from "../components/Title/Title"
import {useDispatch} from "react-redux";
import {authenticateUser, registerUser} from "../services";
import {Alert} from "react-bootstrap";

const TravelerSignup = (props) => {

    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const initialState = {
        firstname:"",
        lastname:"",
        email: "",
        password: "",
        repassword:"",
        gender:"",
        contactNumber:"",
        role:"User",
        nic:"",
        accountstatus:"false",
    };

    const [user, setUser] = useState(initialState);

    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });

    };

    const dispatch = useDispatch();

    const travsignup = () => {
        if (document.getElementById('male').checked) {
            user.gender = document.getElementById('male').value;
                if(!user.gender==="male"){
                    user.gender="female";
                }
        }
        console.log(user);
        dispatch(registerUser(user)).then((response) => {
            setShow(true);
            setError("Check Your Email")
        }).catch((error) => {
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
            <Navbar />
            <div className="mt-5 p-5 text-left signupcontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 card flex-row mx-auto shadow p-3 mb-5 bg-white rounded ">
                        <div className="d-none d-md-flex loginimage">
                            <div class="signupbutton-box">
                                <div>
                                    <div class="signupbtns">
                                        <button type="button" class="signuptoggle-trbtn">Traveler</button>
                                        <button type="button" class="signuptoggle-epbtn"><Link className="eqahref" to="/EquipmentSignup">Equipment Provider</Link></button>
                                        <button type="button" class="signuptoggle-tgbtn"><Link className="tgahref" to="/guidesignup">Travel Guide</Link></button>
                                    </div>
                                    <br/>
                                </div>
                                <img src={signuppic} className="float-left signuppic" alt="signuppic"></img>
                            </div>
                        </div>
                        <form className="loginform-box px-3 row g-3">
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
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="First name" value={user.firstname} onChange={credentialChange} name="firstname"
                                       />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Last name" value={user.lastname} onChange={credentialChange} name="lastname"
                                      />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" placeholder="email" value={user.email} onChange={credentialChange} name="email"
                                       />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Phone Number" value={user.contactNumber} onChange={credentialChange} name="contactNumber"
                                       />
                            </div>
                            <div className="col-md-6">
                                <input type="password" className="form-control" placeholder="Password" value={user.password} onChange={credentialChange} name="password"
                                       />
                            </div>
                            <div className="col-md-6">
                                <input type="password" className="form-control" placeholder="ReEnter Password" value={user.repassword} onChange={credentialChange} name="repassword"
                                />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="NIC or Passport" value={user.nic} onChange={credentialChange} name="repassword"
                                />
                            </div>
                            <div className="col-md-6">
                                <input type="radio" id="male" name="male" value="male"  onChange={credentialChange} name="gender"></input>
                                    <label >Male</label><br/>
                                <input type="radio" id="female" name="female" value="female" onChange={credentialChange} name="gender"></input>
                                        <label>Female</label>
                            </div>
                            <br></br>
                            <div className="col-6 mt-3 mx-auto text-center loginbtn">
                                <button className="btn btn-primary" type="submit" type="button" variant="success" onClick={travsignup}
                                >Signup
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default TravelerSignup