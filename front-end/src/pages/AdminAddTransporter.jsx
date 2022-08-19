import React from "react";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import AddTransporterForm from "../components/Admin/Transpotation/AddTransporterForm";
import Navbar from "../components/Navbar/Navbar";


const AdminAddTransporter = () => {
    return (
        <div className="d-flex flex-column w-100">
            <Navbar />
            <div className="d-flex flex-row w-100 admin-page-content">
                <AdminNav />
                <div className="d-flex flex-column home-container">
                    <div className="d-flex flex-row">
                        <AddTransporterForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAddTransporter;