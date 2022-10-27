import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import './travelertrips.css';

const TodayTrips = () => {
    return (
        <div class="today-container">
            <div className="d-flex flex-column today-card">
                <div className="d-flex flex-row justify-content-between">
                    <h5 className="today-title">Upcoming</h5>
                    <h7 className="today-date">26th Octomber 2022</h7>
                </div>
                <h7>Starting : 6.00 A.M </h7>
                <h7>Ending : </h7>
                <h3 className="today-trip">Trip to Hanthana</h3>
                <div className="today-transport mb-3 d-flex flex-row">
                    <div className="d-flex flex-column w-50 text-left">
                        <h6 className="today-transport-mode">Transport</h6>
                        <div>
                            <FontAwesomeIcon icon={faVanShuttle} className="today-icon" />
                            <h7 className="today-vehicle-number">CBA - ##### </h7>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column text-left">
                    <h6 className="today-transport-mode">Hotel</h6>
                    <div>
                        <h7 className="today-food">The Epitome</h7>
                    </div>
                </div>
                <hr/>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column today-members">
                        <h5>Organizer</h5>
                        <span>Mr. BA Basnayake</span>
                        <span>Basnayake95@gmail.com</span>
                        <span>078234567</span>
                    </div>
                </div>
              <div className="today-Cancel-Button">
                <button className="today-cancel-btn">Cancel</button>
            </div>
            </div>
        </div>
    );
}

export default TodayTrips;
