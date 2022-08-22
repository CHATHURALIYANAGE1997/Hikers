import React from "react"
import signin from "../components/Signin/signin.css"
import forgotpassword from "../components/Signin/forgotpassword.png";
import Navbar from "../components/Navbar/Navbar";
import { useTitle } from "../components/Title/Title"


const ForgotPassword = () => {
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
                            <p className="forgotpasswordp">Enter the email-address associated with your account</p>
                                <div class="forgotpasswordform">
                                    <label for="email">Email Address</label>
                                    <br/>
                                    <input type="text" class="form-control forgotpasswordemail" id="email"/>
                                </div>
                                <br/>
                                <div class="col-6 mt-3 mx-auto text-center loginbtn">
                                    <button type="submit" class="btn btn-primary">Reset Password</button>
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