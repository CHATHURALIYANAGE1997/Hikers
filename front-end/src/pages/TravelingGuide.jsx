import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import GuideReview from "../components/Guide/Profile/GuideReview";
import ProfileCard from "../components/Guide/Profile/ProfileCard";
import ProfileDetails from "../components/Guide/Profile/ProfileDetails";
import Navbar from "../components/Navbar/Navbar";
import authToken from "../utils/authToken";
import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import GuideHeader from "../components/Guide/GuideHeader/GuideHeader";


const TravelingGuide = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    // useEffect(() => {
    //     if (auth.isLoggedIn === true && auth.role === "Travelguide") {
    //         return propTypes.history.push("/guide/profile");
    //     }
    //     else {
    //         localStorage.clear();
    //         return props.history.push("/");
    //     }
    // }, []);

    if (auth.isLoggedIn === true && auth.role === "Travelguide") {

        return (
            <div className="d-flex flex-column tg-container">
                <GuideHeader />
                <div className="d-flex flex-row tg-page">
                    <GuideNav />
                    <div className="d-flex flex-column tg-profile">
                        <div className="d-flex flex-row ">
                            <ProfileCard />
                            <ProfileDetails />
                        </div>
                        <div className="d-flex flex-row tg-reviews">
                            <GuideReview />
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

export default TravelingGuide;

