import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AllTransportProviders from "../components/Admin/Transpotation/AllTransportProviders";
import PopularTransporters from "../components/Admin/Transpotation/PopularTransporter";

import TranspotersIncome from "../components/Admin/Transpotation/TranspotersIncome";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import TransportList from "../components/Admin/Transpotation/TransporterList";

export default function AdminTranspotation (props){

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Admin") {

    const accessToken = localStorage.jwtToken;

    const [transports, setTransport] = useState('');

    const url = 'http://localhost:8080/transport/gettransport';

    useEffect(() => {
        getAllTransport();
    }, []);

    const getAllTransport = () => {
        axios.get(url, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allTransport = response.data;
            setTransport(allTransport);
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
                            <TransportList transports={transports} />
                            <PopularTransporters />
                        </div>
                        <div className="d-flex flex-row">
                            <TranspotersIncome />
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

