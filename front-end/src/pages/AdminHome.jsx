import React from "react";
import { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector } from "react-redux";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import AdminNav from "../components/Admin/AdminNavBar/AdminNav";
import IncomeChart from "../components/Admin/Home/IncomeChart";
import OverViewChart from "../components/Admin/Home/OverviewChart";
import PopularPlaces from "../components/Admin/Home/PopularPlaces";
import ValuableCustomer from "../components/Admin/Home/ValuableCustomer";
import authToken from "../utils/authToken";

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
    else {
        localStorage.clear();
<<<<<<< refs/remotes/origin/main
      //  return props.history.push("/login");
        {return <div><NotFoundPage/></div>}
=======
        return props.history.push("/login");
>>>>>>> Modify Transporter Profile
    }
}

export default AdminHome;
