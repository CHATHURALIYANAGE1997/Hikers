import React from "react"
import signup from "../components/Signup/signup.css"
import Phone from "../components/Signup/Phone.js"
import Navbar from "../components/Navbar/Navbar";
import signuppic from "../components/Signup/signuppic.jpg";
import Passwordhidden from "../components/Signup/Passwordhidden"
import BasicInfo from "../components/Signup/BasicInfo";
import Password from "../components/Signup/Password";


import { useTitle } from "../components/Title/Title"

const TravelerSignup = () => {
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
                                        <button type="button" class="signuptoggle-epbtn"><a className="eqahref" href="/EquipmentSignup">Equipment Provider</a></button>
                                        <button type="button" class="signuptoggle-tgbtn"><a className="tgahref" href="/guidesignup">Travel Guide</a></button>
                                    </div>
                                    <br/>
                                </div>
                                <img src={signuppic} className="float-left signuppic" alt="signuppic"></img>
                            </div>
                        </div>
                        <form id="travelersignup" class="signupform-box px-3 row g-3">
                            <h2 className="travsuph2">Sign up to be a Traveler</h2>
                            <div class="text-center mt-0 sentence">
                                Already have an account <a className="loginahref" href="/Login">Login</a>
                            </div>
                            <BasicInfo />
                            <Phone />
                            {/* <div class="col-12">
                                <Passwordhidden />
                            </div>  */}
                            <Password />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default TravelerSignup