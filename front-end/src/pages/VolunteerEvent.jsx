import React from "react";
import "../components/Forum/Reply/forumreplies.css"
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";


const VolunteerEvent = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-5 p-5 text-left signupcontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 mx-auto shadow p-3 mb-5 bg-white rounded ">
                        <form id="travelersignup" class="signupform-box px-3 row g-3">
                            <h2 className="forumh2">Publish an Event</h2>
                            <div class="col-2">
                                <label for="date">Date</label>
                            </div>
                            <div class="col-4">
                                <input type="date" class="form-control" />
                            </div>
                            <div class="col-2">
                                <label for="time">Time</label>
                            </div>
                            <div class="col-4">
                                <input type="time" class="form-control" />
                            </div>
                            <div class="col-2">
                                <label for="location">Location</label>
                            </div>
                            <div class="col-4">
                                <input type="text" class="form-control" />
                            </div>
                            <div class="col-2">
                                <label for="rate">Description</label>
                            </div>
                            <div class="col-4">
                            <textarea id="w3review" name="w3review" rows="4" cols="35"/>
                            </div>
                            <div className="d-flex flex-row justify-content-right">
                                <Link to={"/adminvolunteer"}><button type="button" className=" btn btn-outline-primary forumpreviewbtn" >Back</button></Link>
                                <button type="button" className="btn btn-primary forumpreviewbtn" >Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default VolunteerEvent