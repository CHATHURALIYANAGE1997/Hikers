import * as React from 'react';
import HotelNav from '../components/Hotels/HotelActor/HotelNav/HotelNav';
import Rooms from '../components/Hotels/HotelActor/HotelRooms/Rooms';
import HotelName from '../components/Hotels/HotelName';
import RoomPackages from '../components/Hotels/HotelActor/HotelRooms/RoomPackages';
import HotelHeader from '../components/Hotels/HotelActor/HotelHeader/HotelHeader';
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";


const HotelRoom = (props) => {

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
                            <Rooms />
                            <RoomPackages />
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

export default HotelRoom;


