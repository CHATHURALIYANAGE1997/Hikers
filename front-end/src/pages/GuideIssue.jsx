import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import '../components/Guide/GuideIssue/guideissue.css';
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import GuideHeader from "../components/Guide/GuideHeader/GuideHeader";
import AddIssue from "../components/Guide/GuideIssue/AddIssue";
import NotFoundPage from "./NotFoundPage";


const GuideIssue = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Travelguide") {
        return (
            <div className="d-flex flex-column tg-container">
                <GuideHeader />
                <div className="d-flex flex-row tg-page">
                    <GuideNav />
                    <div className="d-flex flex-column gs-schedule">
                        <div className="d-flex flex-row justify-content-between gp-payment">
                            <AddIssue />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        {return <div><NotFoundPage/></div>}
    }
}

export default GuideIssue;