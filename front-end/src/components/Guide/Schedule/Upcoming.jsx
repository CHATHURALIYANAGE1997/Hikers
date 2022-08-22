import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import './schedule.css';

const Upcoming = () => {
    return (
        <div class="today-container w-100">
            <div className="d-flex flex-column upcoming-card">
                <div className="d-flex flex-row justify-content-between">
                    <h5 className="today-date">27th July 2022</h5>
                </div>
                <h7>Starting : 9.00 AM</h7>
                <h7>Ending : 6.30 PM</h7>
                <h3 className="upcoming-trip">Trip to Hanthana</h3>
                <div className="today-transport mb-3 d-flex flex-row">
                    <div className="d-flex flex-column w-50 text-left">
                        <h6 className="today-transport-mode">Transport</h6>
                        <div>
                            <FontAwesomeIcon icon={faVanShuttle} className="today-icon" />
                            <h7 className="today-vehicle-number">CBA - ##### </h7>
                        </div>
                    </div>
                    <div className="d-flex flex-column text-left">
                        <h6 className="today-transport-mode">Food</h6>
                        <div>
                            <h7 className="today-food">03 - Veg, 05 - Chicken</h7>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column text-left">
                    <h6 className="today-transport-mode">Hotel</h6>
                    <div>
                        <h7 className="today-food">The Epitome</h7>
                    </div>
                </div>
                <hr />
                <h6>Team details</h6>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column today-members">
                        <h5>Member 1#</h5>
                        <span>Mr. AW Perera</span>
                        <span>95#######V</span>
                        <span>078234567</span>
                    </div>
                    <div className="d-flex flex-column today-members">
                        <h5>Member 1#</h5>
                        <span>Mr. AW Perera</span>
                        <span>95#######V</span>
                        <span>078234567</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upcoming;