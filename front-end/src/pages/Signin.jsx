import React from "react"
import signin from "../components/Signin/signin.css"
import Navbar from "../components/Navbar/Navbar";
import signinpic from "../components/images/signinpic.jpg";
import Passwordhidden from "../components/Signup/Passwordhidden"
import { useTitle } from "../components/Title/Title"


const Signin = () => {
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
                        <div className="login-body">
                            <h1 className="p-2 text-center">Hello, <br></br>Welcome Back</h1>
                            <form class="loginform-box px-3 row g-3">
                                <div class="loginform-input col-12">
                                    <br></br>
                                    <span className="loginiconem"><i class="fa fa-envelope-o"></i></span>
                                    <input type="email" class="form-control" placeholder="Email-Address" required />
                                </div>
                                <div class="col-12">
                                    <br></br>
                                    <Passwordhidden />
                                </div>
                                {/* <div class="col-6">
                                    <div class="mt-1 form-check">
                                        <input type="checkbox" class="custom-control-input" id="cb1" name=""/>
                                            <label class="custom-control-label" for="cb1">Remember me</label>
                                    </div>
                                </div> */}
                                 <div class="col-6">
                                    <div class="mt-1 form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                        <label class="form-check-label" for="gridCheck">Remember me</label>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="mt-1 form-check">
                                        <a href="url">Forgot Password</a>
                                    </div>
                                </div>
                               
                                <div class="col-6 mt-3 mx-auto text-center loginbtn">
                                    <button type="submit" class="btn btn-primary">Login</button>
                                </div>
                                <hr ></hr>
                                <div class="text-center mb-2">
                                Don't have an account? <a href="/signup">Register Here</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}
export default Signin