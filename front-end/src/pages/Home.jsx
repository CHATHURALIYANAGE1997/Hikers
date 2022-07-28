import React from "react";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";
import {Alert} from "react-bootstrap";
import {authenticateUser} from "../services";

const Home = (props) => {
    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);

    }

    const auth = useSelector((state) => state.auth);
    console.log(auth);
    console.log(localStorage);

    // const loginornot = () => {
    //    if(auth.isLoggedIn){
    //
    //             return props.history.push("/home");}else{
    //        return props.history.push("/");
    //         }
    // };

    return (
        <Alert style={{backgroundColor: "#343A40", color: "#ffffff80"}}>
            Welcome {auth.username} <br/> {auth.role}
        </Alert>

    )
};

export default Home;