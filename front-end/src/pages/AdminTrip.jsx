import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import TripRequest from "../components/Admin/Trips/TripRequest";
import NotFoundPage from "./NotFoundPage";


export default function AdminTrip(props) {
    // const AdminHotels = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Admin") {

        const accessToken = localStorage.jwtToken;

        const [notes, getNotes] = useState('');

        const url = 'http://localhost:8080/travelingguide/getAllGuide';

        useEffect(() => {
            getAllNote();
        }, []);

        const getAllNote = () => {
            axios.get(url, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allNotes = response.data;
                getNotes(allNotes);
                //console.log(response.data[0]['name']);
                //console.log(allNotes);
            }).catch((error) => {
                console.log(error);
            })
        }

        const url2 = 'http://localhost:8080/transport/gettransport';

        const [transporter, setTransporter] = useState('');

        useEffect(() => {
            getAllTransporters();
        }, []);

        const getAllTransporters = () => {
            axios.get(url2, {
                headers: { Authorization: `Bearer ${accessToken}` }
            }).then((response) => {
                const allTransporters = response.data;
                setTransporter(allTransporters);
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
                            <h4 className="guide-requests-title">New Trips</h4>
                            <TripRequest details={notes} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        localStorage.clear();
        { return <div><NotFoundPage /></div> }
    }

}

// export default AdminHotels;