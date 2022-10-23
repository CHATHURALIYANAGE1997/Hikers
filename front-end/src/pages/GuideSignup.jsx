import React, { useState } from "react"
import signup from "../components/Signup/signup.css"
import Phone from "../components/Signup/Phone.js"
import Navbar from "../components/Navbar/Navbar";
import signuppic from "../components/Signup/signuppic.jpg";
import Passwordhidden from "../components/Signup/Passwordhidden"
import BasicInfo from "../components/Signup/BasicInfo";
import Password from "../components/Signup/Password";
import { Link } from "react-router-dom";

import { useTitle } from "../components/Title/Title"
import { useDispatch } from "react-redux";
import { GuideSignupnew } from "../services/user/userActions";
import { Alert } from "react-bootstrap";
const GuideSignup = (props) => {

    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const initialState = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repassword: "",
        contactNumber: "",
        role: "Travelguide",
        address: "",
        nic: "",
        experience: "",
        nic_image: "",
        gender: "",
        dob: "",
        accountstatus: "false",
        prolice_report: "",
        rate: "",
        province: "",
    };

    const [user, setUser] = useState(initialState);

    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });

    };

    const dispatch = useDispatch();

    const guideSignups = () => {
        var NICNo =user.nic;
        var dayText = 0;
        var year = "";
        var month = "";
        var day = "";
        var gender = "";

        if (NICNo.length != 10 && NICNo.length != 12) {
            setShow(true);
            resetLoginForm();
            setError("Invalid nic");
        }else {
            // Year
            if (NICNo.length == 10) {
                year = "19" + NICNo.substr(0, 2);
                dayText = parseInt(NICNo.substr(2, 3));
            } else {
                year = NICNo.substr(0, 4);
                dayText = parseInt(NICNo.substr(4, 3));
            }

            // Gender
            if (dayText > 500) {
                gender = "female";
                dayText = dayText - 500;
            } else {
                gender = "male";
            }

            // Day Digit Validation
            if (dayText < 1 && dayText > 366) {
                setShow(true);
                resetLoginForm();
                setError("Invalid nic");
            } else {

                //Month
                if (dayText > 335) {
                    day = dayText - 335;
                    month = 12;
                }
                else if (dayText > 305) {
                    day = dayText - 305;
                    month = 11;
                }
                else if (dayText > 274) {
                    day = dayText - 274;
                    month = 10;
                }
                else if (dayText > 244) {
                    day = dayText - 244;
                    month = 9;
                }
                else if (dayText > 213) {
                    day = dayText - 213;
                    month = 8;
                }
                else if (dayText > 182) {
                    day = dayText - 182;
                    month = 7;
                }
                else if (dayText > 152) {
                    day = dayText - 152;
                    month = 6;
                }
                else if (dayText > 121) {
                    day = dayText - 121;
                    month = 5;
                }
                else if (dayText > 91) {
                    day = dayText - 91;
                    month = 4;
                }
                else if (dayText > 60) {
                    day = dayText - 60;
                    month = 3;
                }
                else if (dayText < 32) {
                    month = 1;
                    day = dayText;
                }
                else if (dayText > 31) {
                    day = dayText - 31;
                    month = 2;
                }

                console.log(year);
                console.log(month);
                console.log(day);
                user.dob=year.concat("-",month,"-",day)
                user.gender=gender;
                console.log(user.gender);
                console.log(user.dob);
            }
        }
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
                            {/* <button type="button" class="signuptoggle-epbtn"><Link className="eqahref" to="/EquipmentSignup">Equipment Provider</Link></button> */}
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
                            <div className="d-flex flex-row">
                                <div class="col-2">
                                    <label for="fname">First Name</label>
                                </div>
                                <div class="col-4 guide-signup-input">
                                    <input type="text" class="form-control" value={user.firstname} onChange={credentialChange} name="firstname" required />
                                </div>
                                <div class="col-2">
                                    <label for="lname ml-2">Last Name</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" class="form-control" value={user.lastname} onChange={credentialChange} name="lastname" required />
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div class="col-2">
                                    <label for="email">Email</label>
                                </div>
                                <div class="col-4 guide-signup-input">
                                    <input type="email" class="form-control" value={user.email} onChange={credentialChange} name="email" required />
                                </div>
                                <div class="col-2">
                                    <label for="nic">NIC/Passport</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" class="form-control" value={user.nic} onChange={credentialChange} name="nic" required />
                                </div>
                            </div>
                            {/* <div class="col-2">
                                <label for="gender">Gender</label>
                            </div>
                            <div class="col-4">
                                <select class="form-control" required>
                                    <option selected value={user.gender} onChange={credentialChange} name="gender">Select a Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div> */}
                            {/* <div class="col-2">
                                <label for="dob">DOB</label>
                            </div>
                            <div class="col-4">
                                <input type="date" class="form-control" placeholder="Date of Birth" value={user.dob} onChange={credentialChange} name="dob" required/>
                            </div> */}
                            <div className="d-flex flex-row">
                                <div class="col-2">
                                    <label for="telephone">Telephone</label>
                                </div>
                                <div class="col-4 guide-signup-input">
                                    <input type="text" class="form-control" value={user.contactNumber} onChange={credentialChange} name="contactNumber" required />
                                </div>
                                <div class="col-2">
                                    <label for="address">Address</label>
                                </div>
                                <div class="col-4">
                                    <input type="text" class="form-control" value={user.address} onChange={credentialChange} name="address" required />
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div class="col-2">
                                    <label for="experience">Province</label>
                                </div>
                                <div class="col-4 guide-signup-input">
                                    <input type="text" class="form-control" value={user.province} onChange={credentialChange} name="province" required />
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
                                    <input type="file" class="form-control" value={user.prolice_report} onChange={credentialChange} name="prolice_report" required />
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div class="col-2">
                                    <label for="rate">NIC Image</label>
                                </div>
                                <div class="col-4 guide-signup-input">
                                    <input type="file" class="form-control" value={user.nic_image} onChange={credentialChange} name="nic_image" required />
                                </div>
                            </div>
                            <div className="d-flex flex-row w-100">
                                <div class="col-2">
                                    <label for="password">Password</label>
                                </div>
                                <div class="col-4 guide-signup-input">
                                    <input type="password" class="form-control" value={user.password} onChange={credentialChange} name="password" required />
                                </div>

                                <div class="col-2">
                                    <label for="confirmpassword">Confirm Password</label>
                                </div>
                                <div class="col-4">
                                    <input type="password" class="form-control" value={user.repassword} onChange={credentialChange} name="repassword" required />
                                </div>
                            </div>
                            <br></br>
                            <div className="w-100 mt-3 mx-auto text-center loginbtn">
                                <button className="btn btn-primary" type="submit" type="button" variant="success" onClick={guideSignups}
                                >Signup
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default GuideSignup
