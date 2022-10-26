import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import authToken from "../../../utils/authToken";
import { Link } from "react-router-dom";

function ConfirmQuestion(props) {

    const { qid } = props;

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    const { guiders } = props;

    const [open, setOpen] = useState(false);

    //const accessToken = localStorage.jwtToken;

    //console.log(accessToken);

    const [error, setError] = useState();
    const [show, setShow] = useState(true);

    const accessToken = localStorage.jwtToken;

    const dispatch = useDispatch();

    const acceptQuestion = (e) => {
        const url1 = `http://localhost:8080/user/updatequestionstatus/${e}`;
        axios.get(url1, {
            headers: { Authorization: `Bearer ${accessToken}` },
        }).then((response) => {
            //console.log(response);
            console.log("success");
        }).catch((error) => {
            console.log(error);  
            console.log("unsuccess"); 
        })
    }

    const displayDetails = (props) => {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Question asked by {qid.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5></h5>
                    <p>
                        {qid.question}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className="question-accept-close">Decline</Button>
                    <Link to={"/admin/articles"}><Button onClick={() => {acceptQuestion(qid.id);}} className="question-accept-ok">Accept</Button></Link>
                </Modal.Footer>
            </Modal>
        );
    }

    return(
        <>
            {displayDetails(props)}
        </>

    )
}

export default ConfirmQuestion;