import * as React from 'react';
import HotelNav from '../components/Hotels/HotelActor/HotelNav/HotelNav';
import Rooms from '../components/Hotels/HotelActor/HotelRooms/Rooms';
import HotelName from '../components/Hotels/HotelName';
import RoomPackages from '../components/Hotels/HotelActor/HotelRooms/RoomPackages';
import HotelHeader from '../components/Hotels/HotelActor/HotelHeader/HotelHeader';


const HotelRoom = () => {
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

export default HotelRoom;


