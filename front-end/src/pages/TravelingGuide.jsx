import React, {useEffect} from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import GuideReview from "../components/Guide/Profile/GuideReview";
import ProfileCard from "../components/Guide/Profile/ProfileCard";
import ProfileDetails from "../components/Guide/Profile/ProfileDetails";
import Navbar from "../components/Navbar/Navbar";
import authToken from "../utils/authToken";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import GuideHeader from "../components/Guide/GuideHeader/GuideHeader";
import { useState } from "react";
import axios from "axios";


const TravelingGuide = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    // if (auth.isLoggedIn === true && auth.role === "Travelguide") {

        const accessToken = localStorage.jwtToken;

        const [guiders, setGuiders] = useState('');
        
        const email = auth.username;
    
        const url = `http://localhost:8080/travelingguide/getTransportProfile/${email}`;
    
        useEffect(() => {
            getAllGuiders();
        }, []);
    
        const getAllGuiders = () => {
            axios.get(url, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allGuiders = response.data;
                setGuiders(allGuiders);
                console.log(allGuiders);
            }).catch((error) => {
                console.log(error);
            })
        }

        return (
            <div className="d-flex flex-column tg-container">
                <GuideHeader />
                <div className="d-flex flex-row tg-page">
                    <GuideNav />
                    <div className="d-flex flex-column tg-profile">
                        <div className="d-flex flex-row ">
                            <ProfileCard guide={guiders}/>
                            <ProfileDetails guide={guiders}/>
                        </div>
                        <div className="d-flex flex-row tg-reviews">
                            <GuideReview />
                        </div>

                    </div>
                </div>

            </div>
        );
    // }
    // else {
    //     localStorage.clear();
    //     return props.history.push("/");
    // }
}

export default TravelingGuide;

