import * as React from 'react';
import HotelNav from '../components/Hotels/HotelActor/HotelNav/HotelNav';
import HotelName from '../components/Hotels/HotelName';
import Images from '../components/Hotels/HotelActor/HotelProfile/Images';
import Details from '../components/Hotels/HotelActor/HotelProfile/Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import HotelHeader from '../components/Hotels/HotelActor/HotelHeader/HotelHeader';
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import authToken from "../utils/authToken";
import NotFoundPage from './NotFoundPage';
import axios from "axios";
import FacilitiesData from '../components/Hotels/HotelActor/HotelProfile/FacilitiesData';
import { faPlus, faTrashCan, faPencil } from "@fortawesome/free-solid-svg-icons";


export default function HotelProfile(props) {
    // const HotelProfile = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    // if (auth.isLoggedIn === true && auth.role === "Hotel") {

        const accessToken = localStorage.jwtToken;

        const [details, setDetails] = useState('');

        const [id, setId] = useState('');

        //console.log(auth);

        let email = auth.username;

        let path = 'http://localhost:8080/hotel/getHotelProfile/';

        const url = path.concat(email);

        useEffect(() => {
            getAllDetails();
        }, []);

        const getAllDetails = () => {
            axios.get(url, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allDetails = response.data;
                const hotel_id = response.data['hotel_id'];
                setId(hotel_id);
                setDetails(allDetails);
                // console.log(response.data);
                // console.log("hello");
                //console.log(response.data);
                //console.log(response.data["address"]);
                //console.log("world");
                //console.log(allNotes);
            }).catch((error) => {
                console.log(error);
            })
        }

        const [facility, setFacility] = useState('');

        const path2 = 'http://localhost:8080/hotel/getHotelFacility';
        // const path2 = 'http://localhost:8080/travelingguide/getAllGuide';


        //console.log(id);
        // const url2 = path2.concat(id);
        // console.log(url2);

        useEffect(() => {
            getHotelFacility();
        }, []);

        const getHotelFacility = () => {
            axios.get(path2, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allFacilities = response.data;
                // console.log(allFacilities);
                setFacility(allFacilities);
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
                            <HotelName name={details.name} />
                            <div className='d-flex flex-row justify-content-between w-100 pl-3'>
                                <Images />
                                <FontAwesomeIcon icon={faPenToSquare} className="rating-change-icon" />
                            </div>
                            <Details details={details} />
                            <div className='d-flex flex-column mt-4 w-100'>
                                <div className='d-flex flex-row justify-content-between'>
                                    <h4 className='details-facilities'>Facilities</h4>
                                    <div className='details-facilities-plus'>
                                        <button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faPlus} className="rating-plus-icon" /> Add New Facility</button>
                                    </div>
                                </div>
                                <FacilitiesData facility={facility} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    // }
    // else {
    //     localStorage.clear();
    //     // return props.history.push("/");
    //     { return <div><NotFoundPage /></div> }

    // }
}

// export default HotelProfile;


