import React from "react";
import './profile.css';
import profile from './Picture.png';

const ProfileDetails = (props) => {

    const displayGuide = (props) => {

        const {guide} = props;

        return (
            <div class="pd-container">
                <div className="pd-card">
                    <div className="d-flex flex-column pd-row">
                        <div className="d-flex flex-row">
                            <div className="h6 pd-h6">Full Name</div>
                            <div className="h6 pd-details">: {guide.firstname} {" "}{guide.lastname}</div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="h6 pd-h6">E-mail</div>
                            <div className="h6 pd-details">: {guide.email} </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="h6 pd-h6">NIC</div>
                            <div className="h6 pd-details">: {guide.nic} </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="h6 pd-h6">Date of Birth</div>
                            <div className="h6 pd-details">: {guide.dob} </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="h6 pd-h6">Gender</div>
                            <div className="h6 pd-details">: {guide.gender} </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="h6 pd-h6">Contact No. #1</div>
                            <div className="h6 pd-details">: {guide.contactNumber} </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="h6 pd-h6">Home Adress</div>
                            <div className="h6 pd-details">: {guide.address} </div>
                        </div>
                        <div className="d-flex mt-2 mr-auto pd-edit-btn-div"><button className="pd-edit-btn">Edit</button></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {displayGuide(props)}
        </>
    )

   
}

export default ProfileDetails;