import React, {useEffect, useState} from "react";
import {useTitle} from "../components/Title/Title";
//import Navigationbar from "../components/Signup/Navigationbar";
import Navbar from "../components/Navbar/Navbar";
import {fetchUsers} from "../services/user/userActions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const NotFoundPage = (props) => {

        useTitle("404")
    return(

        <div>
            <div>

                {/* <Navbar /> */}

            <h1 style={{color : "black",textAlign: "center" ,marginTop:"20%"}}>Page Not Found</h1>
                <h7>You Have to </h7>
                <Link to={"/"}><span>Login</span></Link>
                </div>
        </div>
    )
}

export default NotFoundPage;
