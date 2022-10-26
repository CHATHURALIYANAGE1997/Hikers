import React, { useState } from "react";
import './adminarticles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import axios from "axios";
import ConfirmQuestion from "./ConfirmQuesion";

const Questions = (props) => {

    const accessToken = localStorage.jwtToken;

    const url = 'http://localhost:8080/user/allquestions';

    const [question, setQuestion] = useState('');

    useEffect(() => {
        getQuestions();
    }, []);

    const getQuestions = () => {
        axios.get(url, {
            headers: { Authorization: `Bearer ${accessToken}` }
        }).then((response) => {
            const allGuide = response.data;
            setQuestion(allGuide);
            //console.log(allGuide);
        }).catch((error) => {
            console.log(error);
        })
    }

    const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [qid, setQid] = useState('');

    const handleQuestion = (e) => {
        setQid(e);
    }

    const displayDetails = (props) => {
        if (question.length > 0) {
            return (
                question.map((question, index) => {
                    //console.log(question);
                    if (question.status != 'ture') {
                        console.log(question)
                        return (

                            <div className="d-flex flex-row justify-content-between questions-recent">
                                <div>
                                    <span className="questions-topic">New Question </span>
                                    <span>: {question.question}</span>
                                </div>
                                <button onClick={() => {setModalShow(true); handleQuestion(question)}} className="questions-see-more-btn"><FontAwesomeIcon icon={faAngleDoubleRight} className="questions-see-more-icon" /></button>
                                <ConfirmQuestion 
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    qid={qid}
                                />
                            </div>

                        );
                    }
                }
                )
            )
        }
    }

    return (
        <>
            {displayDetails(props)}
        </>
    )

}

export default Questions;