import * as React from 'react';
import Navbar from "../components/Navbar/Navbar";
import HotelNav from '../components/Hotels/HotelActor/HotelNav/HotelNav';
import Rooms from '../components/Hotels/HotelActor/HotelRooms/Rooms';
import HotelName from '../components/Hotels/HotelName';
import RoomPackages from '../components/Hotels/HotelActor/HotelRooms/RoomPackages';


const HotelRoom = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
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

export default HotelRoom;


