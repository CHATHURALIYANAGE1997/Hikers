import React from "react";
import AllArticles from "../components/Admin/AdminArticles/AllArticles";
import Questions from "../components/Admin/AdminArticles/Questions";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";
import NotFoundPage from "./NotFoundPage";

const AdminArticles = (props) => {
    // if (localStorage.jwtToken) {
    //     authToken(localStorage.jwtToken);
    // }

    // const auth = useSelector((state) => state.auth);
    // if (auth.isLoggedIn === true && auth.role === "Admin") {

        return (
            <div className="d-flex flex-column w-100">
                <AdminHeader />
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
    // }
    // else {
    //     localStorage.clear();
    //     // return props.history.push("/");
    //     {return <div><NotFoundPage/></div>}

    // }
}

export default AdminArticles;