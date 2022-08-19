import React from "react";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import IncomeChart from "../components/Admin/Home/IncomeChart";
import OverViewChart from "../components/Admin/Home/OverviewChart";
import PopularPlaces from "../components/Admin/Home/PopularPlaces";
import ValuableCustomer from "../components/Admin/Home/ValuableCustomer";
import Navbar from "../components/Navbar/Navbar";


const AdminHome = () => {
    return (
        <div className="d-flex flex-column w-100">
            <Navbar />
            <div className="d-flex flex-row w-100 admin-page-content">
                <AdminNav />
                <div className="d-flex flex-column home-container">
                    <div className="d-flex flex-row">
                        <OverViewChart />
                        <PopularPlaces />
                    </div>
                    <div className="d-flex flex-row">
                        <IncomeChart />
                        <ValuableCustomer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHome;