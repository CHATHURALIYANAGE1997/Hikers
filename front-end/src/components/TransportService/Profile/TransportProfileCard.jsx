import React from "react";
import './transportprofile.css';
import profile from './chathura.jfif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil} from '@fortawesome/free-solid-svg-icons';

const TransportProfileCard = (props) => {

    const displayDetails = (props) => {

        const { details } = props;

        return (
            <div class="tp-container">
                <div className="tp-card">
                    <img src={profile} className="tp-pic" alt="Profile Picture"></img>
                    <h4 className="tp-name">{details.firstname}{" "}{details.lastname}</h4>
                    <h7 className="tp-name h5">(Transport Service Provicer)</h7>
                    <div className="transport-profile-details-container">
                        <div className="d-flex flex-row justify-content-between">
                            <h6 className="transport-profile-details-title">Personal Details</h6>
                            {/* <FontAwesomeIcon icon={faPencil} className="transport-profile-change-icon" /> */}
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-25">Full Name</h6>
                            <h6 className="transport-profile-details-right">: {details.firstname}{" "}{details.lastname}</h6>
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-25">Email</h6>
                            <h6 className="transport-profile-details-right">: {details.email}</h6>
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-25">NIC</h6>
                            <h6 className="transport-profile-details-right">: {details.nic}</h6>
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-25">Contact Number</h6>
                            <h6 className="transport-profile-details-right">: {details.contactNumber}</h6>
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-25">Home Address</h6>
                            <h6 className="transport-profile-details-right text-capitalize">: {details.address}</h6>
                        </div>
                        {/* <div className="d-flex flex-row">
                            <h6 className="w-25">Account Number</h6>
                            <h6 className="transport-profile-details-right">: 826457829</h6>
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-25">Bank</h6>
                            <h6 className="transport-profile-details-right">: Commercial Bank</h6>
                        </div>
                        <div className="d-flex flex-row">
                            <h6 className="w-25">Branch</h6>
                            <h6 className="transport-profile-details-right">: Kurunegala</h6>
                        </div> */}
                    </div>
                    <div className="d-flex flex-row justify-content-right w-100 pl-2">
                        <button type="button" className="transport-edit-btn">Edit</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {displayDetails(props)}
        </>
    )
    
}

export default TransportProfileCard;

