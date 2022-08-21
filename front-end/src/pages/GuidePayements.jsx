import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import Total from "../components/Guide/Payements/Total";
import Travels from "../components/Guide/Payements/Travels";
import Navbar from "../components/Navbar/Navbar";
import '../components/Guide/Payements/payments.css';
import PaymentHistory from "../components/Guide/Payements/PaymentHistory";
import authToken from "../utils/authToken";
import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import GuideHeader from "../components/Guide/GuideHeader/GuideHeader";

const GuidePayements = (props) => {

    if(localStorage.jwtToken){
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);
    
    useEffect(() => {
        if(auth.isLoggedIn === true && auth.role === "Travelguide"){
            return propTypes.history.push("/guide/payments");
        }
        else {
            localStorage.clear();
            return props.history.push("/");
        }
    },[]);

    return (
        <div className="d-flex flex-column tg-container">
        <GuideHeader />
        <div className="d-flex flex-row tg-page">
            <GuideNav />
            <div className="d-flex flex-column gs-schedule">
                <div className="d-flex flex-row justify-content-between gp-payment">
                    <Travels />
                    <Total />
                </div>
                <div className="">
                    <PaymentHistory />
                </div>
            </div>
        </div>
    </div>
    );
}

export default GuidePayements;