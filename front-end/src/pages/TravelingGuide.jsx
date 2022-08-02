import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import GuideReview from "../components/Guide/Profile/GuideReview";
import ProfileCard from "../components/Guide/Profile/ProfileCard";
import ProfileDetails from "../components/Guide/Profile/ProfileDetails";
import Navbar from "../components/Navbar/Navbar";


const TravelingGuide = () => {
    return (
        <div className="d-flex flex-column tg-container">
            <Navbar />
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

export default TravelingGuide;

