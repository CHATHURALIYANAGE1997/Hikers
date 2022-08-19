import React from "react";
import AddArticleForm from "../components/Admin/AdminArticles/AddArticleForm";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import Navbar from "../components/Navbar/Navbar";


const AdminAddArticle = () => {
    return (
        <div className="d-flex flex-column w-100">
            <Navbar />
            <div className="d-flex flex-row w-100 admin-page-content">
                <AdminNav />
                <div className="d-flex flex-column home-container">
                    <div className="d-flex flex-row">
                        <AddArticleForm />                  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminAddArticle;