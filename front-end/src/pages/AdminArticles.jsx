import React from "react";
import AllArticles from "../components/Admin/AdminArticles/AllArticles";
import Questions from "../components/Admin/AdminArticles/Questions";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import Navbar from "../components/Navbar/Navbar";


const AdminArticles = () => {
    return (
        <div className="d-flex flex-column w-100">
            <Navbar />
            <div className="d-flex flex-row w-100 admin-page-content">
                <AdminNav />
                <div className="d-flex flex-column home-container">
                    <div className="d-flex flex-row">
                       <AllArticles />
                       <Questions />
                    </div>
                    <div className="d-flex flex-row">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminArticles;