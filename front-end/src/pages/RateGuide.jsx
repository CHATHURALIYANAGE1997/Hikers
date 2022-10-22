import React from "react";
import "../components/Rating/rateTransport.css"
import Rateoptions from "../components/Rating/Rateoptions";
import Form from 'react-bootstrap/Form';
import RateTripinfor from "../components/Rating/RateTripinfor";

const rateGuide = () => {
    return (
        <div>
            <div className="mt-5 p-5 text-left signupcontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 mx-auto shadow lg p-3 mb-5 bg-white rounded ">
                        <form id="travelersignup" class="signupform-box px-3 row g-3">
                            <h2 className="transporthead">We appreciate your feedback!</h2>
                            <h5 className="transportsubhead">Rate the Travel Guider</h5>
                            <hr />
                            <RateTripinfor />
                            <hr />
                            <div className="mb-3">
                                <h5>Security</h5>
                                <Rateoptions />
                            </div>
                            <div className="mb-3">
                                <h5>Punctuality</h5>
                                <Rateoptions />
                            </div>
                            <div className="mb-3">
                                <h5>Communication</h5>
                                <Rateoptions />
                            </div>
                            <div className="mb-3">
                                <h5>Domain Knowledge</h5>
                                <Rateoptions />
                            </div>
                            <div className="mb-3">
                                <h5>Overall Service Quality</h5>
                                <Rateoptions />
                            </div>
                            <div className="mb-3">

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <h5>Any comments or suggestions?</h5>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </div>
                            <div className="d-flex flex-row justify-content-right">
                                <button type="button" className="btn btn-primary forumpreviewbtn" >Submit Feedback</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default rateGuide