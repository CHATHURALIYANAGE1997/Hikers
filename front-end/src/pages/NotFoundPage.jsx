import React, {useEffect, useState} from "react";
import {useTitle} from "../components/Title/Title";
//import Navigationbar from "../components/Signup/Navigationbar";
import Navbar from "../components/Navbar/Navbar";
import {fetchUsers} from "../services/user/userActions";
import {useDispatch} from "react-redux";

const NotFoundPage = (props) => {

        useTitle("404")
    return(

        <div>
            <div>

            <h1 style={{color : "black",textAlign: "center" ,marginTop:"20%"}}>Page Not Found</h1>
                <h7>You Have to Login</h7>
                </div>
        </div>
    )
}

export default NotFoundPage;