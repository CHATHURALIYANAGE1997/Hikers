import React from "react";
import "../Styles/page.css"
import WelcomeHikers from "../components/WelcomeHikers/welcomeHikers";
import Navbar from "../components/Navbar/Navbar";
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";

// const img = new URL ("./istockphoto-1189969126-612x612 - Copy.jpg", import.meta.url)

const Page = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "User") {
        return (
            <div>
                <Navbar />
                <div className="backImg">
                    <WelcomeHikers />

                </div>
            </div>
        );
    }
    else {
        localStorage.clear();
        return props.history.push("/");
    }
}
export default Page