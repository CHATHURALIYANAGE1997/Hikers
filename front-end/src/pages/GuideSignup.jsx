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
import {GuideSignupnew} from"../services/user/userActions";
import {Alert} from "react-bootstrap";
const GuideSignup = (props) => {

    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const initialState = {
        firstname:"",
        lastname:"",
        email: "",
        password: "",
        repassword:"",
        contactNumber:"",
        role:"Travelguide",
        address:"",
        nic:"",
        experience:"",
        nic_image:"",
        gender:"",
        dob:"",
        accountstatus:"false",
        prolice_report:"",
        rate:"",
        province:"",
    };

    const [user, setUser] = useState(initialState);

    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });

    };

    const dispatch = useDispatch();

    const guideSignups = () => {
        dispatch(GuideSignupnew(user)).then((response) => {
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
            <div className="mt-5 p-5 text-left signupcontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 mx-auto shadow p-3 mb-5 bg-white rounded ">
                            <div class="signupbtns">
                                <button type="button" class="signuptoggle-tgbtn"><Link className="traahref" to="/travsignup">Traveler</Link></button>
                                <button type="button" class="signuptoggle-epbtn"><Link className="eqahref" to="/EquipmentSignup">Equipment Provider</Link></button>
                                <button type="button" class="signuptoggle-trbtn">Travel Guide</button>

                            </div>
                        <form id="travelersignup" class="signupform-box px-3 row g-3">
                            <h2 className="guidesuph2">Sign up to be a Travel Guide</h2>
                            <div class="mt-0 guidesentence">
                                Already have an account <a className="loginahref" href="/Login">Login</a>
                            </div>
                            <div>
                                <di>
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
                                </di>
                            </div>
                            <div class="col-2">
                                <label for="fname">First Name</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" value={user.firstname} onChange={credentialChange} name="firstname"/>
                            </div>
                            <div class="col-2">
                                <label for="lname">Last Name</label>    
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" value={user.lastname} onChange={credentialChange} name="lastname"/>
                            </div>
                            <div class="col-2">
                                <label for="email">Email</label>
                            </div>
                            <div class="col-4">
                                <input type="email" class="form-control" value={user.email} onChange={credentialChange} name="email"/>
                            </div>
                            <div class="col-2">
                                <label for="nic">NIC/Passport</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" value={user.nic} onChange={credentialChange} name="nic"/>
                            </div>
                            <div class="col-2">
                                <label for="gender">Gender</label>
                            </div>
                            <div class="col-4">
                            <select class="form-control" >
                                <option selected value={user.gender} onChange={credentialChange} name="gender">Select a Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            </div>
                            <div class="col-2">
                                <label for="dob">DOB</label>
                            </div>
                            <div class="col-4">
                                <input type="date" class="form-control" placeholder="Date of Birth" value={user.dob} onChange={credentialChange} name="dob"/>
                            </div>
                            
                            <div class="col-2">
                                <label for="telephone">Telephone</label>
                            </div>    
                            <div class="col-4">
                                <input type="text" class="form-control" value={user.contactNumber} onChange={credentialChange} name="contactNumber"/>
                            </div>
                            <div class="col-2">
                                <label for="address">Address</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" value={user.address} onChange={credentialChange} name="address"/>
                            </div>
                            <div class="col-2">
                                <label for="experience">Province</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" value={user.province} onChange={credentialChange} name="experience"/>
                            </div>
                            {/* <div class="col-2">
                                <label for="rate">Rate</label>
                            </div>
                            {/* <div class="col-4">
                                <input type="text" class="form-control" value={user.rate} onChange={credentialChange} name="rate"/>
                            </div> */}
                            <div class="col-2">
                                <label for="rate">Police Report</label>
                            </div>
                            <div class="col-4">
                                <input type="file" class="form-control" value={user.prolice_report} onChange={credentialChange} name="prolice_report"/>
                            </div>
                            <div class="col-2">
                                <label for="rate">NIC Image</label>
                            </div>
                            <div class="col-4">
                                <input type="file" class="form-control" value={user.nic_image} onChange={credentialChange} name="nic_image"/>
                            </div>
                            <div class="col-2">
                                <label for="password">Password</label>
                            </div>
                            <div class="col-4">
                                <input type="password" class="form-control" value={user.password} onChange={credentialChange} name="password"/>
                            </div>
                            <div class="col-2">
                                <label for="confirmpassword">Confirm Password</label>
                            </div>
                            <div class="col-4">
                                <input type="password" class="form-control" value={user.repassword} onChange={credentialChange} name="repassword"/>
                            </div>
                            <br></br>
                            <div className="col-6 mt-3 mx-auto text-center loginbtn">
                                <button className="btn btn-primary" type="submit" type="button" variant="success" onClick={guideSignups}
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
export default GuideSignup
