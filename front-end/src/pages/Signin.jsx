import React from "react"
import signin from "../components/Signin/signin.css"
import Navigationbar from "../components/Signup/Navigationbar";
import signinpic from "../components/images/signinpic.jpg";
import Passwordhidden from "../components/Signup/Passwordhidden"

import { useTitle } from "../components/Title/Title"

const Signin = () => {
    useTitle("Hikers")
   
    return (
        <div>
            <Navigationbar />

            <div className="mt-5 p-5 text-left container">
                <div class="shadow p-3 mb-5 bg-white rounded ">
                    <img src={signinpic} className="float-left signinpic" alt="signuppic"></img>
                    <h1 className="p-2 text-center">Sign In</h1>
                    <form class="row g-3 signinform">
                        <div class="col-12">
                            <br></br>
                            <input type="email" class="form-control" placeholder="Email-Address" />
                        </div>
                        <div class="col-12">
                            <br></br>
                            <Passwordhidden/>
                        </div>
                        <div class="col-12">
                            <div class="mt-3 form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck" />
                                <label class="form-check-label" for="gridCheck">
                                    Remember Password
                                </label>
                            </div>
                        </div>
                        <div class="col-6 mt-3 mx-auto text-center loginbtn">
                            <input class="btn btn-primary" widthtype="submit" value="Log in" />
                        </div>
                    </form>
                </div>


            </div>
        </div >
    )
}
export default Signin