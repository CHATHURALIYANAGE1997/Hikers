import * as UT from "./userTypes";
import axios from "axios";


const REGISTER_URL = "http://localhost:8080/user/signup";
// const VERIFY_URL=`http://localhost:8080/user/accountconfirm/${code}`;
const REGISTER_URLEQRPROVIDER="http://localhost:8080/user/signupequipmentprovider"
const REGISTER_URLGUIDESIGNUP="http://localhost:8080/user/signuptraveling"
//const api = `http://localhost:8080/user/accountconfirm/${code}`;

export const registerUser = (userObject) => async (dispatch) => {
    dispatch(userRequest());
    try {
        const response = await axios.post(REGISTER_URL, userObject);
        dispatch(userSavedSuccess(response.data));
        return Promise.resolve(response.data);
    } catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
};


export const verifyuserr=(code)=>async (dispatch)=>{
    const VERIFY_URL=`http://localhost:8080/user/accountconfirm/${code}`;
    dispatch(userRequest());
    try {
        const response = axios.get(VERIFY_URL)
        dispatch(userSavedSuccess(response));
        return Promise.resolve(response);
    }catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
}

export const verifyequ=(code)=>async (dispatch)=>{
    const VERIFY_URL=`http://localhost:8080/user/accountconfirmequprovider/${code}`;
    dispatch(userRequest());
    try {
        const response = axios.get(VERIFY_URL)
        dispatch(userSavedSuccess(response));
        return Promise.resolve(response);
    }catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
}


export const Eqprovider=(userObject)=>async (dispatch)=>{
    dispatch(userRequest());
    try {
        const response = await axios.post(REGISTER_URLEQRPROVIDER, userObject);
        dispatch(userSavedSuccess(response));
        return Promise.resolve(response);

    }catch (error) {
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
}

export const GuideSignupnew=(userObject)=>async (dispatch)=>{
    dispatch(userRequest());
    try{
        const response = await axios.post(REGISTER_URLGUIDESIGNUP, userObject);
        dispatch(userSavedSuccess(response));
        return Promise.resolve(response);
    }catch (error){
        dispatch(userFailure(error.message));
        return Promise.reject(error);
    }
}

const userRequest = () => {
    return {
        type: UT.USER_REQUEST,
    };
};

const userSavedSuccess = (user) => {
    return {
        type: UT.USER_SAVED_SUCCESS,
        payload: user,
    };
};

const userSuccess = (users) => {
    return {
        type: UT.USER_SUCCESS,
        payload: users,
    };
};

const userFailure = (error) => {
    return {
        type: UT.USER_FAILURE,
        payload: error,
    };
};


