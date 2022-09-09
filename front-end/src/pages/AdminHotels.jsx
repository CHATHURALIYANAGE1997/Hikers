import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AllHotels from "../components/Admin/Hotels/AllHotels";
import HotelIncome from "../components/Admin/Hotels/HotelIncome";
import PopularHotels from "../components/Admin/Hotels/PopularHotels";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import HotelList from "../components/Admin/Hotels/HotelList";


export default function AdminHotel(props){
// const AdminHotels = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "Admin") {

    const accessToken = localStorage.jwtToken;

    const [notes, getNotes] = useState('');

    const url = 'http://localhost:8080/user/gethotels';

    useEffect(() => {
        getAllNote();
    }, []);

    const getAllNote = () => {
        axios.get(url, {
            headers: { Authorization: `Bearer ${accessToken}`}
        }).then((response) => {
            const allNotes = response.data;
            getNotes(allNotes);
            console.log(response.data[0]['name']);
            //console.log(allNotes);
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
                            <HotelList notes={notes} />
                            <PopularHotels />
                        </div>
                        <div className="d-flex flex-row">
                            <HotelIncome />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        localStorage.clear();
        return props.history.push("/");
    }

}

// export default AdminHotels;