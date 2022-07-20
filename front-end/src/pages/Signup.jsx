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

            <div className="mt-5 p-5 text-left container">
                <div class="shadow p-3 mb-5 bg-white rounded ">
                    <img src={signuppic} className="float-left signup-img" alt="signuppic"></img>
                    <h2 className="p-2 text-center">Sign Up</h2>
                    <form class="row g-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                        <div class="col-12">
                            <br></br>
                            <input type="email" class="form-control" placeholder="Email-Address" />
                        </div>
                        <div class="col-12">
                            <br></br>
                            <input type="text" class="form-control" placeholder="NIC Number / Passport Number" />
                        </div>
                        <div class="col-12">
                            <br></br>
                            <div className="form-control">
                            <Phone />
                            </div>
                        </div>
                        <div class="col-12">
                            <br></br>
                            <Passwordhidden/>
                        </div>
                        <div class="col-12">
                            <br></br>
                            <input type="password" class="form-control" placeholder=" Confirm Password" />
                        </div>
                        <br></br>
                        <div class="col-12">
                            <div class="mt-3 form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <div class="col-6 mt-3 mx-auto text-center">
                            <input class="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                </div>


            </div>
        </div >





    )
}


export default Signup