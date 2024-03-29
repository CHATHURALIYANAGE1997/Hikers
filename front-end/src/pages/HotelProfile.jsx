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
import RulesData from '../components/Hotels/HotelActor/HotelProfile/RulesData';
import AddRuleForm from '../components/Hotels/HotelActor/HotelProfile/AddRuleForm';
import AddFacilityForm from '../components/Hotels/HotelActor/HotelProfile/AddFacilityForm';
import ChangeProfile from '../components/Hotels/HotelActor/HotelProfile/ChangeProfile';


export default function HotelProfile(props) {

    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = useState(false);

    const [ruleShow, setRuleShow] = React.useState(false);
    const [showRule, setShowRule] = useState(false);

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Hotel") {

        const accessToken = localStorage.jwtToken;


        //Get hotel profile details
        const [details, setDetails] = useState('');

        const [id, setId] = useState('');

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
            }).catch((error) => {
                console.log(error);
            })
        }

        localStorage.setItem("id", id);

        //Get hotel facilities
        const [facility, setFacility] = useState('');

        const path2 = 'http://localhost:8080/hotel/getHotelFacility';

        // const url2 = path2.concat(id);

        useEffect(() => {
            getHotelFacility();
        }, []);

        const getHotelFacility = () => {
            axios.get(path2, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allFacilities = response.data;
                setFacility(allFacilities);
            }).catch((error) => {
                console.log(error);
            })
        }

        //Get Hotel Rules
        const [rules, setRules] = useState('');
        const path3 = 'http://localhost:8080/hotel/getHotelRules';
        // const url3 = path3.concat(id);

        useEffect(() => {
            getHotelRules();
        }, []);

        const getHotelRules = () => {
            axios.get(path3, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allRules = response.data;
                //console.log(allRules);
                setRules(allRules);
            }).catch((error) => {
                console.log(error);
            })
        }

        //Popup
        const [profileId, setProfileId] = useState('');
        const [changeProfile, setChangeProfile] = useState('');

        const handleClick = (e) => {
            console.log(e);
            setProfileId(e);
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
                                <FontAwesomeIcon icon={faPenToSquare} className="rating-change-icon"
                                    onClick={()=>{setChangeProfile(true); handleClick(details);}}
                                />
                                <ChangeProfile 
                                    show={changeProfile}
                                    onHide={() => setChangeProfile(false)}
                                    profileId={profileId}
                                />
                            </div>
                            <Details details={details} />
                            <div className='d-flex flex-column mt-4 w-100'>
                                <div className='d-flex flex-row justify-content-between'>
                                    <h4 className='details-facilities'>Facilities</h4>
                                    <div className='details-facilities-plus'>
                                        <button onClick={() => setModalShow(true)} type="button" class="btn btn-primary"><FontAwesomeIcon icon={faPlus} className="rating-plus-icon" /> Add New Facility</button>
                                        <AddFacilityForm
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
                                    </div>
                                </div>
                                <FacilitiesData facility={facility} />
                            </div>
                            <div className='details-facility-container'>
                                <div className='d-flex flex-row justify-content-between'>
                                    <h4 className='details-facilities'>Hotel Rules</h4>
                                    <div className='details-facilities-plus'>
                                        <button onClick={() => setRuleShow(true)} type="button" class="btn btn-primary"><FontAwesomeIcon icon={faPlus} className="rating-plus-icon" /> Add New Rule</button>
                                        <AddRuleForm
                                            show={ruleShow}
                                            onHide={() => setRuleShow(false)}
                                        />
                                    </div>
                                </div>
                                <div className='d-flex flex-row justify-content-end'>
                                    <FontAwesomeIcon icon={faPencil} className="rating-pencil-icon" />
                                </div>
                                <ul>
                                    <RulesData rules={rules} />
                                </ul>
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

// export default HotelProfile;


