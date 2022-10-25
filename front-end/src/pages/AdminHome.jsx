import React from "react";
import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import IncomeChart from "../components/Admin/Home/IncomeChart";
import MostTrippedCustomer from "../components/Admin/Home/MostTrippedCustomers";
import OverViewChart from "../components/Admin/Home/OverviewChart";
import PopularPlaces from "../components/Admin/Home/PopularPlaces";
import ValuableCustomer from "../components/Admin/Home/ValuableCustomer";
import authToken from "../utils/authToken";
import NotFoundPage from "./NotFoundPage";

const AdminHome = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    // useEffect(() => {
    //     if(auth.isLoggedIn === true && auth.role === "Admin"){
    //         return propTypes.history.push("/admin/home");
    //     }
    //     else {
    //         localStorage.clear();
    //         return props.history.push("/");
    //     }
    // },[]);

    if (auth.isLoggedIn === true && auth.role === "Admin") {

        return (
            <div className="d-flex flex-column w-100">
                <AdminHeader />
                <div className="d-flex flex-row w-100 admin-page-content">
                    <AdminNav />
                    <div className="d-flex flex-column home-container w-100">
                        <div className="d-flex flex-column w-100">
                            <IncomeChart />
                        </div>
                        <h4 className="admin-hotel-top">Most Valuable Customers</h4>
                        <div className="d-flex flex-row">\
                        <h3 className="admin-hotel-top">Highest spending customers</h3>
                            <ValuableCustomer />
                        <h3 className="admin-hotel-top">Most engaged customers</h3>
                            <MostTrippedCustomer />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
    else {
        localStorage.clear();
        //  return props.history.push("/login");
        { return <div><NotFoundPage /></div> }

        // return props.history.push("/login");
    }
}

export default AdminHome;
