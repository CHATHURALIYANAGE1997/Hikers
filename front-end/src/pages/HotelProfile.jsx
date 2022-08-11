import * as React from 'react';
import Navbar from "../components/Navbar/Navbar";

import HotelNav from '../components/Hotels/HotelActor/HotelNav/HotelNav';
import HotelName from '../components/Hotels/HotelName';
import Images from '../components/Hotels/HotelActor/HotelProfile/Images';
import Details from '../components/Hotels/HotelActor/HotelProfile/Details';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const HotelProfile = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
            <div className="d-flex flex-row tg-page">
                <HotelNav />
                <div className="d-flex flex-column tg-profile">
                    <div className="d-flex flex-column m-auto w-75">
                        <HotelName />
                        <div className='d-flex flex-row justify-content-between w-100 pl-3'>
                            <Images />
                            <FontAwesomeIcon icon={faPenToSquare} className="rating-change-icon" />
                        </div>
                        <Details />

                    </div>
                </div>
            </div>

        </div>
    );
}

export default HotelProfile;


