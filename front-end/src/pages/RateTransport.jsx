import React, { useState } from "react";
import "../components/Rating/rateTransport.css"
import Form from 'react-bootstrap/Form';

const rateTransport = () => {
    const [security, setSecurity] = useState();
    const [punctuality, setPunctuality] = useState();
    const [navigationcapacity, setNavigationcapacity] = useState();
    const [cleanliness, setCleanliness] = useState();
    const [overallservicequality, setOverallservicequality] = useState();

    return (
        <div>
            <div className="mt-5 p-5 text-left signupcontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 mx-auto shadow lg p-3 mb-5 bg-white rounded ">
                        <form id="travelersignup" class="signupform-box px-3 row g-3">
                            <h2 className="transporthead">We appreciate your feedback!</h2>
                            <h5 className="transportsubhead">Rate the Transport Service Provider</h5>
                            <hr />
                            {/* <RateTripinfor /> */}
                            <div className="mb-3">
                                <h5>Security</h5>
                                <div className="Ratingoptionstransport">
                                    <h1>{security}</h1>
                                    <input type="radio" name="security" value="Excellent" />Excellent
                                    {/* onChange={e => setNavigationcapacity(e.target.value)} */}
                                    <input type="radio" name="security" value="Very Goood" />Very Good
                                    <input type="radio" name="security" value="Good" />Good
                                    <input type="radio" name="security" value="Average" />Average
                                    <input type="radio" name="security" value="Poor" />Poor
                                    <input type="radio" name="security" value="Very Poor" />Very Poor
                                </div>
                            </div>
                            <div className="mb-3">
                                <h5>Punctuality</h5>
                                <div className="Ratingoptionstransport">
                                    <h1>{punctuality}</h1>
                                    <input type="radio" name="punctuality" value="Excellent" />Excellent
                                    {/* onChange={e => setNavigationcapacity(e.target.value)} */}
                                    <input type="radio" name="punctuality" value="Very Goood" />Very Good
                                    <input type="radio" name="punctuality" value="Good" />Good
                                    <input type="radio" name="punctuality" value="Average" />Average
                                    <input type="radio" name="punctuality" value="Poor" />Poor
                                    <input type="radio" name="punctuality" value="Very Poor" />Very Poor
                                </div>
                            </div>
                            <div className="mb-3">
                                <h5>Navigation Capacity</h5>
                                <div className="Ratingoptionstransport">
                                    <h1>{navigationcapacity}</h1>
                                    <input type="radio" name="navigation" value="Excellent" />Excellent
                                    <input type="radio" name="navigation" value="Very Goood" />Very Good
                                    {/* onChange={e => setNavigationcapacity(e.target.value)} */}
                                    <input type="radio" name="navigation" value="Good" />Good
                                    <input type="radio" name="navigation" value="Average" />Average
                                    <input type="radio" name="navigation" value="Poor" />Poor
                                    <input type="radio" name="navigation" value="Very Poor" />Very Poor
                                </div>
                            </div>
                            <div className="mb-3">
                                <h5>Cleanliness</h5>
                                <div className="Ratingoptionstransport">
                                    <h1>{cleanliness}</h1>
                                    <input type="radio" name="cleanliness" value="Excellent" />Excellent
                                    {/* onChange={e => setNavigationcapacity(e.target.value)} */}
                                    <input type="radio" name="cleanliness" value="Very Goood" />Very Good
                                    <input type="radio" name="cleanliness" value="Good" />Good
                                    <input type="radio" name="cleanliness" value="Average" />Average
                                    <input type="radio" name="cleanliness" value="Poor" />Poor
                                    <input type="radio" name="cleanliness" value="Very Poor" />Very Poor
                                </div>
                            </div>
                            <div className="mb-3">
                                <h5>Overall Service Quality</h5>
                                <div className="Ratingoptionstransport">
                                    <h1>{overallservicequality}</h1>
                                    <input type="radio" name="servicequality" value="Excellent" />Excellent
                                    <input type="radio" name="servicequality" value="Very Goood" />Very Good
                                    <input type="radio" name="servicequality" value="Good" />Good
                                    <input type="radio" name="servicequality" value="Average" />Average
                                    <input type="radio" name="servicequality" value="Poor" />Poor
                                    <input type="radio" name="servicequality" value="Very Poor" />Very Poor
                                </div>
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
export default rateTransport