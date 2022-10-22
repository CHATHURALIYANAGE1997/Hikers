import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";

import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import GuideList from "../components/Admin/Guide/GuideList";
import PopularGuide from "../components/Admin/Guide/PopularGuider";
import GuidersIncome from "../components/Admin/Guide/GuidersIncome";

export default function AdminGuide (props){

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

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
                        <div className="d-flex flex-row">
                            <GuideList guiders={guiders} />
                            <PopularGuide />
                        </div>
                        <div className="d-flex flex-row">
                            <GuidersIncome />
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

