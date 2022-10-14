import * as React from 'react';
import HotelNav from '../components/Hotels/HotelActor/HotelNav/HotelNav';
import Rooms from '../components/Hotels/HotelActor/HotelRooms/Rooms';
import HotelName from '../components/Hotels/HotelName';
import RoomPackages from '../components/Hotels/HotelActor/HotelRooms/RoomPackages';
import HotelHeader from '../components/Hotels/HotelActor/HotelHeader/HotelHeader';
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import NotFoundPage from './NotFoundPage';
import BookingChart from '../components/Hotels/HotelActor/HotelPayments/BookingsChart';
import PaymentHistory from '../components/Hotels/HotelActor/HotelPayments/PaymentHistory';
import { useState } from 'react';
import { useEffect } from 'react';
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const HotelPayments = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Hotel") {

        const accessToken = localStorage.jwtToken;

        const [payment, setPayment] = useState('');

        const id = localStorage.getItem("id");

        let path = 'http://localhost:8080/hotel/getBookings/';

        const url = path.concat(id);

        useEffect(() => {
            getAllPayments();
        }, []);

        const getAllPayments = () => {
            axios.get(url, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((reposnse) => {
                const allPayments = reposnse.data;
                setPayment(allPayments);
                console.log(allPayments);
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
                            <BookingChart />
                            <div className="d-flex flex-column details-address pt-3">
                                <div className="d-flex flex-row">
                                    <div className="input-group w-75 justify-content-center mb-3 ml-auto mr-auto">
                                        <div className="form-outline w-75 mr-auto ml-auto">
                                            <input type="search" id="form1" className="form-control history-input" placeholder="Search" />
                                        </div>
                                        <button type="button" className="btn btn-primary history-search-btn">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </button>
                                    </div>
                                </div>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Date</th>
                                            <th scope='col'>Time</th>
                                            <th scope="col">Visitor</th>
                                            <th scope="col">Crowd</th>
                                            <th scope="col">Room type</th>
                                            <th scope="col">Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <PaymentHistory payment={payment} />

                                    </tbody>
                                </table>
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

export default HotelPayments;


