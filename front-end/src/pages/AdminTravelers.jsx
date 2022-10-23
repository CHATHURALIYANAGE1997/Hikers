import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import NotFoundPage from "./NotFoundPage";
import GuideRequests from "../components/Admin/AdminTraveler/GuideRequests";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const AdminTraveler = (props) => {


    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    const accessToken = localStorage.jwtToken;

    if (auth.isLoggedIn === true && auth.role === "Admin") {

        const accessToken = localStorage.jwtToken;

        const [guiders, setGuiders] = useState('');

        const url = 'http://localhost:8080/admin/getguides';

        useEffect(() => {
            getAllGuiders();
        }, []);

        const getAllGuiders = () => {
            axios.get(url, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allGuiders = response.data;
                setGuiders(allGuiders);
                //console.log(response.data[0]['firstname']);
            }).catch((error) => {
                console.log(error);
            })
        }

        return (
            <div className="d-flex flex-column w-100">
                <AdminHeader />
                <div className="d-flex flex-row w-100 admin-page-content">
                    <AdminNav />
                    <div className="d-flex flex-column home-container">
                        <div className="d-flex flex-column guide-request-container">
                            <h4 className="guide-requests-title">Traveleing Guide Registrations</h4>
                            <GuideRequests guiders={guiders} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        { return <div><NotFoundPage /></div> }

    }
}

export default AdminTraveler;