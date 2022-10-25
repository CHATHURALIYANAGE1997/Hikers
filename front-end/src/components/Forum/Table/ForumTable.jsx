import React, { useState } from "react";import './forumtable.css';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const ForumTable = (props) => {

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

    const displayDetails = (props) => {
        if (question.length > 0) {
            return (
                question.map((question, index) => {
                    console.log(question);
                    if (question.status == 'ture') {
                        let dataString = question.date;
                        let result = dataString.substring(0, 10);
                        return (
                            <tr class="forumrows">
                                <td>
                                    <Link to={"/forumDetails"}><div className="forumtopic">
                                        {question.question}
                                    </div></Link>
                                    <div className="forumauthor">
                                        by {question.name}
                                    </div>
                                </td>
                                <td>{index}</td>
                                <td>
                                    <div>
                                        {result}
                                    </div>
                                    <div className="forumauthor">
                                        by {question.name}
                                    </div>
                                </td>
                            </tr>


                        );
                    }
                })
            )
        }

    }
    return (
        <>
            {displayDetails(props)}
        </>
    )

}
export default ForumTable;