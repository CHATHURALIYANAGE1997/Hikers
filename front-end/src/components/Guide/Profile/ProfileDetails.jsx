import React from "react";
import './profile.css';
import profile from './Picture.png';

const ProfileDetails = () => {
    return (
        <div class="pd-container">
            <div className="pd-card">
                <div className="d-flex flex-column pd-row">
                    <div className="d-flex flex-row">
                        <div className="h6 pd-h6">Full Name</div>
                        <div className="h6 pd-details">: MSD Perera</div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="h6 pd-h6">E-mail</div>
                        <div className="h6 pd-details">: msdperera@gmail.com</div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="h6 pd-h6">NIC</div>
                        <div className="h6 pd-details">: #########V</div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="h6 pd-h6">Contact No. #1</div>
                        <div className="h6 pd-details">: 072######</div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="h6 pd-h6">Contact No. #2</div>
                        <div className="h6 pd-details">: 078######</div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="h6 pd-h6">Home Adress</div>
                        <div className="h6 pd-details">: 23, ABC Rd, Galle</div>
                    </div>
                    <div className="d-flex mt-2 mr-auto pd-edit-btn-div"><button className="pd-edit-btn">Edit</button></div>
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;