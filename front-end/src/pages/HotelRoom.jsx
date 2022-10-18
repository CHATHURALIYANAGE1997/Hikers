import * as React from 'react';
import HotelNav from '../components/Hotels/HotelActor/HotelNav/HotelNav';
import Rooms from '../components/Hotels/HotelActor/HotelRooms/Rooms';
import HotelName from '../components/Hotels/HotelName';
import RoomPackages from '../components/Hotels/HotelActor/HotelRooms/RoomPackages';
import HotelHeader from '../components/Hotels/HotelActor/HotelHeader/HotelHeader';
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import NotFoundPage from './NotFoundPage';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faWifi, faPlus } from "@fortawesome/free-solid-svg-icons";
import AddRoomForm from '../components/Hotels/HotelActor/HotelRooms/AddRoomForm';
import AddPackageForm from '../components/Hotels/HotelActor/HotelRooms/AddPackageForm';


const HotelRoom = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [packageShow, setPackageShow] = React.useState(false);

    const [showPackage, setShowPackage] = useState(false);

    const handlePackageClose = () => setShow(false);
    const handlePackageShow = () => setShow(true);

    if (auth.isLoggedIn === true && auth.role === "Hotel") {

    const accessToken = localStorage.jwtToken;

    //Get Room Details
    const [room, setRoom] = useState('');

    const url1 = 'http://localhost:8080/hotel/getRoom';

    useEffect(() => {
        getRoom();
    }, []);

    const getRoom = () => {
        axios.get(url1, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allRoom = response.data;
            setRoom(allRoom);
        }).catch((error) => {
            console.log(error);
        })
    }

    //Get Package DEtails
    const [fpackage, setFpackage] = useState('');

    const url2 = 'http://localhost:8080/hotel/getPackage';

    useEffect(() => {
        getPackage();
    }, []);

    const getPackage = () => {
        axios.get(url2, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allPackage = response.data;
            setFpackage(allPackage);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="d-flex flex-column tg-container">
            <HotelHeader />
            <div className="d-flex flex-row tg-page">
                <HotelNav />
                <div className="d-flex flex-column tg-profile">
                    <div className="d-flex flex-column m-auto w-75">
                        <HotelName />
                        <div className="d-flex flex-column w-100 p-3 mb-5">
                            <div className='d-flex flex-row w-100 justify-content-between pb-2'>
                                <h4 className='rooms-rooms'>Rooms</h4>
                                <div className='rooms-plus'>
                                    <button onClick={() => setModalShow(true)} type="button" class="btn btn-primary"><FontAwesomeIcon icon={faPlus} className="rating-plus-icon" /> Add Room Type</button>
                                    <AddRoomForm
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-row justify-content-between rooms-card-container'>
                                <Rooms room={room} />
                            </div>
                        </div>
                        <div className="d-flex flex-column w-100 p-3">
                            <div className='d-flex flex-row w-100 justify-content-between pb-2'>
                                <h4 className='rooms-rooms'>Room Packages</h4>
                                <div className='room-packages-plus'>
                                    <button onClick={() => setPackageShow(true)} type="button" class="btn btn-primary"><FontAwesomeIcon icon={faPlus} className="rating-plus-icon" /> Add New Package</button>
                                    <AddPackageForm
                                        show={packageShow}
                                        onHide={() => setPackageShow(false)}
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-row w-100'>
                                <RoomPackages fpackage={fpackage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        { return <div><NotFoundPage /></div> }

    }
}

export default HotelRoom;


