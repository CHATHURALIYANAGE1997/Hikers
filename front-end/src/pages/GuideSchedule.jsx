import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import Today from "../components/Guide/Schedule/Today";
import Upcoming from "../components/Guide/Schedule/Upcoming";
import Navbar from "../components/Navbar/Navbar";
import authToken from "../utils/authToken";
import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import GuideHeader from "../components/Guide/GuideHeader/GuideHeader";
import NotFoundPage from "./NotFoundPage";
import Calendar from "../components/Guide/Schedule/Calendar";

const GuideSchedule = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    const email = auth.username

    // useEffect(() => {
    //     if(auth.isLoggedIn === true && auth.role === "Travelguide"){
    //         return propTypes.history.push("/guide/schedule");
    //     }
    //     else {
    //         localStorage.clear();
    //         return props.history.push("/");
    //     }
    // },[]);

    // if (auth.isLoggedIn === true && auth.role === "Travelguide") {
        return (
            <div className="d-flex flex-column tg-container">
                <GuideHeader />
                <div className="d-flex flex-row tg-page">
                    <GuideNav />
                    <div className="d-flex flex-column gs-schedule">
                    <div className="d-flex flex-row">
                        <Today email={email}/>
                        <Calendar/>
                        </div>
                        <div className="d-flex flex-row gs-upcoming">
                            <Upcoming />
                        </div>

                    </div>
                </div>

            </div>
        );
    // }
    // else {
    //     localStorage.clear();
    //     // return props.history.push("/");
    //     {return <div><NotFoundPage/></div>}

    // }
}

export default GuideSchedule;