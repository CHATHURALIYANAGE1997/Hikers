import React from "react";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AllHotels from "../components/Admin/Hotels/AllHotels";
import HotelIncome from "../components/Admin/Hotels/HotelIncome";
import PopularHotels from "../components/Admin/Hotels/PopularHotels";
import Navbar from "../components/Navbar/Navbar";


const AdminHotels = () => {
    return (
        <div className="d-flex flex-column w-100">
            <Navbar />
            <div className="d-flex flex-row w-100 admin-page-content">
                <AdminNav />
                <div className="d-flex flex-column home-container">
                    <div className="d-flex flex-row">
                        <AllHotels />
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

export default AdminHotels;