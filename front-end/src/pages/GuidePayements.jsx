import React from "react";
import GuideNav from "../components/Guide/GuideNav/GuideNav";
import Total from "../components/Guide/Payements/Total";
import Travels from "../components/Guide/Payements/Travels";
import Navbar from "../components/Navbar/Navbar";
import '../components/Guide/Payements/payments.css';
import PaymentHistory from "../components/Guide/Payements/PaymentHistory";

const GuidePayements = () => {
    return (
        <div className="d-flex flex-column tg-container">
        <Navbar />
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