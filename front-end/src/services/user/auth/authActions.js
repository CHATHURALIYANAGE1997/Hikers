import * as AT from "./authTypes";
import axios from "axios";

//const AUTH_URL = "http://localhost:8081/rest/user/authenticate";
const AUTH_URL = "http://localhost:4300/user/login";

export const authenticateUser = (email, password) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(AUTH_URL, {

            email: email,
            password: password,
        });
        localStorage.setItem("jwtToken", response.data.token);
        //console.log(response.data);
        dispatch(success({ username: response.data.name, isLoggedIn: true, role: response.data.role, }));
        return Promise.resolve(response.data);
    } catch (error) {
        dispatch(failure());
        return Promise.reject(error);
    }
};

