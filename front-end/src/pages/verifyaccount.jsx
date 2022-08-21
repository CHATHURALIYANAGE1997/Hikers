import React, {useState} from "react";
import authToken from "../utils/authToken";
import {Alert} from "react-bootstrap";
import { useEffect } from 'react';
import * as axios from 'axios';
// import Home from "./Home";
// import {useGridParamsApi} from "@mui/x-data-grid/internals";
// import useParams from "hooks";
// import useSearchParams from "hooks";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {neeee,verifyuserr} from "../services/user/userActions";
const verifyaccount = (props) => {

    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const search = useLocation().search;
    const code = new URLSearchParams(search).get('id');
    console.log(code);

    const api = `http://localhost:8080/user/accountconfirm/${code}`;

    const dispatch = useDispatch();

     const verifyaccountUser=()=>{
         dispatch(verifyuserr(code)).then((response) => {
             setShow(true);
             setError("Acoount Create SuccessFul")
         }).catch((error) => {
             console.log(error.message);
             setShow(true);
             setError("Invalid token");
         });
    };

    return (
        <div>
            <div>
            {show && props.message && (
                <Alert variant="success" onClose={() => setShow(false)} dismissible>
                    {props.message}
                </Alert>
            )}
            {show && error && (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    {error}
                </Alert>
            )}
            </div>

    <form>
        <div class="col-6 mt-3 mx-auto text-center loginbtn">
            <button class="btn btn-primary" type="submit" type="button" variant="success" onClick={verifyaccountUser} >Verify account</button>
        </div>
    </form>
        </div>
)
}

export default verifyaccount;