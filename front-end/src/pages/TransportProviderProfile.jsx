import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TransportProfileCard from "../components/TransportService/Profile/TransportProfileCard";
import TransportReview from "../components/TransportService/Profile/TransportReview";
import TransportVehicle from "../components/TransportService/Profile/TransportVehicle";
import TransportServiceNavBar from "../components/TransportService/TransportNavBar/TransportServiceNavBar";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import TransporterHeader from "../components/TransportService/TransporterHeader/TransporterHeader";
import NotFoundPage from "./NotFoundPage";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const TransportProviderProfile = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    // if (auth.isLoggedIn === true && auth.role === "Traprovider") {

        const accessToken = localStorage.jwtToken;

        const [id, setId] = useState('');

        const [details, setDetails] = useState('');

        let email = auth.username;

        let path1 = 'http://localhost:8080/transport/getTransporter/';

        const usr1 = path1.concat(email);

        useEffect(() => {
            getTransporter();
        }, []);

        const getTransporter = () => {
            axios.get(usr1, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allDetails = response.data;
                const transporter_id = response.data['service_provider_id'];
                console.log(transporter_id);
                console.log(allDetails);
                setId(transporter_id);
                setDetails(allDetails);
            }).catch((error) => {
                console.log(error);
            })
        }

        localStorage.setItem("id", id);

        return (
            <div className="d-flex flex-column tg-container">
                <TransporterHeader />
                <div className="d-flex flex-column tg-page">
                    <TransportServiceNavBar />
                    <div className="d-flex flex-row tp-profile">
                        <TransportProfileCard details={details}/>
                        <TransportVehicle details={details}/>
                    </div>
                    <TransportReview />
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

export default TransportProviderProfile;

