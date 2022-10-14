import React from "react";
import './transportprofile.css';
import vehicle from './Vehicle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil} from '@fortawesome/free-solid-svg-icons';

const TransportVehicle = (props) => {

    const displayDetails = (props) => {
        const { details } = props;

        return (
            <div class="tp-container">
                <div className="tp-card">
                    <img src={vehicle} className="tv-pic" alt="Vehicle Picture"></img>
                    <h4 className="tp-name">{details.vehicle_type}</h4>
                    <div className="transport-profile-details-container mt-2">
                        <div className="d-flex flex-row justify-content-between">
                            <h6 className="transport-profile-details-title">Vehicle Details</h6>
                            {/* <FontAwesomeIcon icon={faPencil} className="transport-profile-change-icon" /> */}
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-50">Vehicle Number</h6>
                            <h6 className="transport-profile-details-right">: {details.vehicle_number}</h6>
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-50">Vehicle Type</h6>
                            <h6 className="transport-profile-details-right">: {details.vehicle_type}</h6>
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-50">Maximum Passenger Count</h6>
                            <h6 className="transport-profile-details-right">: {details.maximum_passengers}</h6>
                        </div>
                        {/* <div className="d-flex flex-row">
                            <h6 className="w-50">Air Condition</h6>
                            <h6 className="transport-profile-details-right">: Yes</h6>
                        </div> */}
                        {/* <div className="d-flex flex-row">
                            <h6 className="w-50">Condition</h6>
                            <h6 className="transport-profile-details-right">: Good</h6>
                        </div> */}
                    </div>
                    <div className="d-flex flex-row justify-content-right w-100 pl-2">
                        <button type="button" className="transport-edit-btn">Edit</button>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <>
            {displayDetails(props)}
        </>
    )
   
}

export default TransportVehicle;

