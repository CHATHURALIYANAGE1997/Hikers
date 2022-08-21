import React from "react"
import signup from "../components/Signup/signup.css"
import Phone from "../components/Signup/Phone.js"
import Navbar from "../components/Navbar/Navbar";
import Passwordhidden from "../components/Signup/Passwordhidden"
import BasicInfo from "../components/Signup/BasicInfo";
import Password from "../components/Signup/Password";
import  {Link} from "react-router-dom";

import { useTitle } from "../components/Title/Title"

const EquipmentSignup = () => {
    useTitle("Hikers")

    return (
        <div>
            <Navbar />
            <div className="mt-5 p-5 text-left signupcontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 mx-auto shadow p-3 mb-5 bg-white rounded ">
                            <div class="signupbtns">
                                <button type="button" class="signuptoggle-tgbtn"><Link className="traahref" href="/travsignup">Traveler</Link></button>
                                <button type="button" class="signuptoggle-trbtn">Equipment Provider</button>
                                <button type="button" class="signuptoggle-epbtn"><Link className="tgahref" href="/GuideSignup">Travel Guide</Link></button>

                            </div>
                        <form id="travelersignup" class="signupform-box px-3 row g-3">
                            <h2 className="guidesuph2">Sign up to be a Equipment Provider</h2>
                            <div class="mt-0 guidesentence">
                                Already have an account <a className="loginahref" href="/Login">Login</a>
                            </div>
                            <div class="col-2">
                                <label for="fname">First Name</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-2">
                                <label for="lname">Last Name</label>    
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control"/>
                            </div>
                            <div class="col-2">
                                <label for="email">Email</label>
                            </div>
                            <div class="col-4">
                                <input type="email" class="form-control"/>
                            </div>
                            <div class="col-2">
                                <label for="nic">NIC/Passport</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-2">
                                <label for="telephone">Telephone</label>
                            </div>    
                            <div class="col-4">
                                <input type="text" class="form-control"/>
                            </div>
                            <div class="col-2">
                                <label for="address">Address</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-2">
                                <label for="rate">Profile Photo</label>
                            </div>
                            <div class="col-4">
                                <input type="file" class="form-control" />
                            </div>
                            <div class="col-2">
                                <label for="rate">NIC Image</label>
                            </div>
                            <div class="col-4">
                                <input type="file" class="form-control" />
                            </div>
                            <div class="col-2">
                                <label for="password">Password</label>
                            </div>
                            <div class="col-4">
                                <input type="password" class="form-control" />
                            </div>
                            <div class="col-2">
                                <label for="confirmpassword">Confirm Password</label>
                            </div>
                            <div class="col-4">
                                <input type="password" class="form-control" />
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default EquipmentSignup