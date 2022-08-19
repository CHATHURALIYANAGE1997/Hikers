import React from "react";
import './admintranspotation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import profile from './Picture.png';

const AllTransportProviders = () => {
    return (
        <div className="d-flex flex-column all-hotels-container">
            <div className="d-flex flex-row justify-content-between">
                <h4>Current Transport Service Providers</h4>
                <a href='/admin/addtransporter'><button className="all-hotels-add-btn"><FontAwesomeIcon icon={faPlus} className="all-hotels-icon" />New Transporter</button></a>
            </div>
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={profile} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Kasun Perera</span>
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={profile} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Kasun Perera</span>
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={profile} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Kasun Perera</span>
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div className="all-hotels-icons">
                    <img src={profile} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Kasun Perera</span>
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={profile} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Kasun Perera</span>
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={profile} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Kasun Perera</span>
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
            <div className="d-flex flex-row justify-content-between all-hotels-hotel">
                <div>
                    <img src={profile} className="all-transporter-profile-img" alt="Profile Picture"></img>
                    <span className="all-transpotation-provider-name">Kasun Perera</span>
                </div>
                <div className="all-hotels-icons">
                    <FontAwesomeIcon icon={faPenToSquare} className="all-hotels-edit-icon" />
                    <FontAwesomeIcon icon={faTrashCan} className="all-hotels-edit-icon" />
                </div>
            </div>
            <hr className="all-hotels-hr" />
        </div>
    );
}

export default AllTransportProviders;