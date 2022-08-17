import React from "react";
import './transportprofile.css';
import vehicle from './Vehicle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil} from '@fortawesome/free-solid-svg-icons';

const TransportVehicle = () => {
    return (
        <div class="tp-container">
            <div className="tp-card">
                <img src={vehicle} className="tv-pic" alt="Vehicle Picture"></img>
                <h4 className="tp-name">Vitz Car</h4>
                <div className="transport-profile-details-container mt-2">
                    <div className="d-flex flex-row justify-content-between">
                        <h6 className="transport-profile-details-title">Vehicle Details</h6>
                        <FontAwesomeIcon icon={faPencil} className="transport-profile-change-icon" />
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Vehicle Number</h6>
                        <h6 className="transport-profile-details-right">: YB-1234</h6>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Vehicle Type</h6>
                        <h6 className="transport-profile-details-right">: Vitz Car</h6>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Maximum Passenger Count</h6>
                        <h6 className="transport-profile-details-right">: 04</h6>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Air Condition</h6>
                        <h6 className="transport-profile-details-right">: Yes</h6>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Condition</h6>
                        <h6 className="transport-profile-details-right">: Good</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransportVehicle;

