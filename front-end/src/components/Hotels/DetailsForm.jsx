import React from "react";
import "./bookingdetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const DetailsForm = () => {
    return (
        <div>
            <div className="d-flex flex-column pt-4 pb-4  pl-5 pr-5  df-form-details">
                <form>
                    <div class="form-group df-special">
                        <label for="inputSpecialrequest">Special request</label>
                        <label className="df-notice">Special requests can’t be guaranteed - but propert will do its best to meet your needs You can
                            always  make a special request after your booking is completed</label>
                        <input type="text" class="form-control" id="inputSpecialrequest"></input>
                    </div>

                    <div class="form-row df-row">
                        <div class="form-group w-50 df-column">
                            <label for="inputArrivaltime">Your arrival time</label>
                            <label className="df-notice">Add your estimated arrival time</label>
                            <select id="inputState" class="form-control">
                                <option selected>Choose...</option>
                                <option>12:00</option>
                                <option>13:00</option>
                                <option>14:00</option>
                                <option>15:00</option>
                                <option>16:00</option>
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                            </select>
                        </div>
                    </div>
                    <Link to={"/transport"}>
                        <button type="button" class="btn btn-primary df-booking-btn"><FontAwesomeIcon icon={faLock} /><span className="df-icon">Complete booking</span></button>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default DetailsForm;