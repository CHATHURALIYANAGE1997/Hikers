import React from "react";
import './transportprofile.css';
import profile from './Picture.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil} from '@fortawesome/free-solid-svg-icons';

const TransportProfileCard = () => {
    return (
        <div class="tp-container">
            <div className="tp-card">
                <img src={profile} className="tp-pic" alt="Profile Picture"></img>
                <h4 className="tp-name">Mr. Nimal Kumara</h4>
                <h7 className="tp-name">Transport Service Provicer</h7>
                <div className="transport-profile-details-container">
                    <div className="d-flex flex-row justify-content-between">
                        <h6 className="transport-profile-details-title">Personal Details</h6>
                        <FontAwesomeIcon icon={faPencil} className="transport-profile-change-icon" />
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Full Name</h6>
                        <h6 className="transport-profile-details-right">: Nimal Kumara De Silva</h6>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Email</h6>
                        <h6 className="transport-profile-details-right">: nimal@gmail.com</h6>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">NIC</h6>
                        <h6 className="transport-profile-details-right">: 67#######V</h6>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Contact Number #1</h6>
                        <h6 className="transport-profile-details-right">: 67########</h6>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Contact Number #2</h6>
                        <h6 className="transport-profile-details-right">: 67########</h6>
                    </div>
                    <div className="d-flex flex-row">
                        <h6 className="w-25">Home Address</h6>
                        <h6 className="transport-profile-details-right">: No. 43/A, Walawwa Rd, Galewela</h6>
                    </div>
                    <div className="d-flex flex-row">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TransportProfileCard;

