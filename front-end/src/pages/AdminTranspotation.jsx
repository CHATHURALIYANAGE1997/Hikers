import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AllTransportProviders from "../components/Admin/Transpotation/AllTransportProviders";
import PopularTransporters from "../components/Admin/Transpotation/PopularTransporter";

import TranspotersIncome from "../components/Admin/Transpotation/TranspotersIncome";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";


const AdminTranspotation = (props) => {


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
                            <AllTransportProviders />
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
        return props.history.push("/");
    }
}

export default AdminTranspotation;