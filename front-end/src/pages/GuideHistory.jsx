import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import History from "../components/Guide/History/History";
import Navbar from "../components/Navbar/Navbar";


const GuideHistory = () => {
    return (
        <div className="d-flex flex-column tg-container">
        <Navbar />
        <div className="d-flex flex-row gh-page">
            <GuideNav />
            <div className="d-flex flex-column gs-schedule">
                <History />
            </div>
        </div>
    </div>
    );
}

export default GuideHistory;