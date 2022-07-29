import React from "react"
import signup from "../components/Signup/signup.css"
import Phone from "../components/Signup/Phone.js"
import Navigationbar from "../components/Signup/Navigationbar";
import signuppic from "../components/images/signuppic.jpg";
import Passwordhidden from "../components/Signup/Passwordhidden"

import { useTitle } from "../components/Title/Title"

const Signup = () => {
    useTitle("Hikers")

    return (
        <div>
            <Navigationbar />

            <div className="mt-5 p-5 text-left signupcontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 card flex-row mx-auto shadow p-3 mb-5 bg-white rounded ">
                        <div className="d-none d-md-flex loginimage">
                            <img src={signuppic} className="float-left signuppic" alt="signuppic"></img>
                        </div>
                        <div className="signup-body"></div>

                        <form class="signupform-box px-3 row g-3">
                            <h2 className="p-2">Sign up to hikers</h2>
                            <div class="text-center mt-0 sentence">
                                Already have an account <a href="/signin">Login</a>
                                </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div class="col-md-6">
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                            <div class="col-12">
                                <input type="email" class="form-control" placeholder="Email-Address" />
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control" placeholder="NIC Number / Passport Number" />
                            </div>
                            <div class="col-12">
                                <div className="form-control">
                                    <Phone />
                                </div>
                            </div>
                            <div class="col-12">
                                <input type="password" class="form-control" placeholder="Password" />
                            </div>
                            {/* <div class="col-12">
                                <Passwordhidden />
                            </div> */}
                            <div class="col-12">
                                <input type="password" class="form-control" placeholder=" Confirm Password" />
                            </div>
                            <div class="col-12">
                                <div class="mt-1 form-check">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label" for="gridCheck">I read and agree to the <a href="url">Terms & Condtions</a></label>
                                    
                                </div>
                            </div>
                            <div class="col-6 mt-3 mx-auto text-center ">
                                <button type="submit" class="btn btn-primary">Create an account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Signup