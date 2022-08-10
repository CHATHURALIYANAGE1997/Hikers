import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import Today from "../components/Guide/Schedule/Today";
import Navbar from "../components/Navbar/Navbar";

const GuideSchedule = () => {
    return (
        <div className="d-flex flex-column tg-container">
        <Navbar />
        <div className="d-flex flex-row tg-page">
            <GuideNav />
            <div className="d-flex flex-column gs-schedule">
                <Today />
            </div>
        </div>

    </div>
    );
}

export default GuideSchedule;