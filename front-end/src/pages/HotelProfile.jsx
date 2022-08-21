import * as React from 'react';
import HotelNav from '../components/Hotels/HotelActor/HotelNav/HotelNav';
import HotelName from '../components/Hotels/HotelName';
import Images from '../components/Hotels/HotelActor/HotelProfile/Images';
import Details from '../components/Hotels/HotelActor/HotelProfile/Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import HotelHeader from '../components/Hotels/HotelActor/HotelHeader/HotelHeader';
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";


const HotelProfile = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Hotel") {
        return (
            <div className="d-flex flex-column tg-container">
                <HotelHeader />
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
    else {
        localStorage.clear();
        return props.history.push("/");
    }
}

export default HotelProfile;


