import React from "react";
import "./bookingdetails.css";

const DetailsForm = () => {
    return (
        <div>
            <div className="d-flex flex-column pt-4 pb-4  pl-5 pr-5  df-form-details">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputFirstname">First name</label>
                            <input type="text" class="form-control" id="inputFirstname" placeholder="First name"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputLastname">Last name</label>
                            <input type="text" class="form-control" id="inputLastname" placeholder="Last name"></input>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail">Email address</label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Email"></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputConfirmemail">Confirm email address</label>
                            <input type="email" class="form-control" id="inputLastname" placeholder="Confirm email address"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputSpecialrequest">Special request</label>
                        <label className="df-notice">Special requests can’t be guaranteed - but propert will do its best to meet your needs You can
                            always  make a special request after your booking is completed</label>
                        <input type="text" class="form-control" id="inputSpecialrequest"></input>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-5">
                            <label for="inputArrivaltime">Your arrival time</label>
                            <label className="df-notice">Add your estimated arrival time</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">

                        <div class="form-group col-md-6">
                            <label for="inputCountry">County/ region <label className="df-required"></label></label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputContact">Contact No.</label>
                            <input type="text" class="form-control" id="inputZip"></input>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary float-right">Complete booking</button>
                </form>
            </div>
        </div>
    );
}

export default DetailsForm;