import HeaderComponent from "../components/HeaderComponent "
import React from "react"
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";


const Welcomepage = (props) => {

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    if (auth.isLoggedIn === true && auth.role === "User") {
        return (
            <div>
                <HeaderComponent />
            </div>
        );
    }
    else {
        localStorage.clear();
        return props.history.push("/");
    }
}

export default Welcomepage