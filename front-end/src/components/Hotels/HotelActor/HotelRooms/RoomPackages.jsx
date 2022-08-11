import * as React from 'react';
import './hotelroom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faWifi, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const RoomPackages = () => {

    return (
        <div className="d-flex flex-column w-100 p-3">
            <div className='d-flex flex-row w-100 justify-content-between pb-2'>
                <h4 className='rooms-rooms'>Room Packages</h4>
                <div className='room-packages-plus'>
                    <button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faPlus} className="rating-plus-icon" /> Add New Package</button>
                </div>
            </div>            
            <div className='d-flex flex-row w-100'>
                <div className='d-flex flex-column room-package-card'>
                    <h5>Family Package</h5>
                    <span className='m-auto'><FontAwesomeIcon icon={faBed} className='rooms-icon' />02 Double beds</span>
                    <span className='m-auto'>
                        Sleeps :
                        <FontAwesomeIcon icon={faUser} className='room-package-icon' />
                        <FontAwesomeIcon icon={faUser} className='room-package-icon' />
                        <FontAwesomeIcon icon={faUser} className='rooms-icon' />
                        <FontAwesomeIcon icon={faUser} className='rooms-icon' />
                    </span>
                    <span><FontAwesomeIcon icon={faWifi} className='rooms-icon' />Free Wifi</span>
                    <span className='m-auto room-package-meal'>Breakfast, Lunch & Dinner</span>
                    <div className='room-package-price'>LKR 30, 300</div>
                </div>
                <div className='d-flex flex-column room-package-card'>
                    <h5>Family Package</h5>
                    <span className='m-auto'><FontAwesomeIcon icon={faBed} className='rooms-icon' />02 Double beds</span>
                    <span className='m-auto'>
                        Sleeps :
                        <FontAwesomeIcon icon={faUser} className='room-package-icon' />
                        <FontAwesomeIcon icon={faUser} className='room-package-icon' />
                        <FontAwesomeIcon icon={faUser} className='rooms-icon' />
                        <FontAwesomeIcon icon={faUser} className='rooms-icon' />
                    </span>
                    <span><FontAwesomeIcon icon={faWifi} className='rooms-icon' />Free Wifi</span>
                    <span className='m-auto room-package-meal'>Breakfast, Lunch & Dinner</span>
                    <div className='room-package-price'>LKR 30, 300</div>
                </div>
            </div>
        </div>
    );
}

export default RoomPackages;