import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AllHotels from "../components/Admin/Hotels/AllHotels";
// import HotelIncome from "../components/Admin/Hotels/HotelIncome";
import PopularHotels from "../components/Admin/Hotels/PopularHotels";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";

const AdminHotels = (props) => {
    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);
    if (auth.isLoggedIn === true && auth.role === "Admin") {

        return (
            <div className="d-flex flex-column w-100">
                <AdminHeader />
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
    else {
        localStorage.clear();
        return props.history.push("/");
    }
}

export default AdminHotels;