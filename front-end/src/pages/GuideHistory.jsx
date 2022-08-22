import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import History from "../components/Guide/History/History";
import Navbar from "../components/Navbar/Navbar";
import authToken from "../utils/authToken";
import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import GuideHeader from "../components/Guide/GuideHeader/GuideHeader";
import NotFoundPage from "./NotFoundPage";


const GuideHistory = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    // useEffect(() => {
    //     if(auth.isLoggedIn === true && auth.role === "Travelguide"){
    //         return propTypes.history.push("/guide/payments");
    //     }
    //     else {
    //         localStorage.clear();
    //         return props.history.push("/");
    //     }
    // },[]);

    if (auth.isLoggedIn === true && auth.role === "Travelguide") {

        return (
            <div className="d-flex flex-column tg-container">
                <GuideHeader />
                <div className="d-flex flex-row gh-page">
                    <GuideNav />
                    <div className="d-flex flex-column gs-schedule">
                        <History />
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

export default GuideHistory;