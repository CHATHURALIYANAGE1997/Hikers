import React from "react";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AllTransportProviders from "../components/Admin/Transpotation/AllTransportProviders";
import PopularTransporters from "../components/Admin/Transpotation/PopularTransporter";
import TranspotersIncome from "../components/Admin/Transpotation/TranspotersIncome";
import Navbar from "../components/Navbar/Navbar";


const AdminTranspotation = () => {
    return (
        <div className="d-flex flex-column w-100">
            <Navbar />
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

export default AdminTranspotation;