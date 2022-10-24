import React from "react";
import './forumtable.css';
import { Link } from "react-router-dom";

const ForumTable = () => {

    const accessToken = localStorage.jwtToken;

    const url = 'http://localhost:8080/user/getquestionsnew';

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
            console.log(allGuide);
        }).catch((error) => {
            console.log(error);
        })
    }

    const displayDetails = () => {
        if (question.length > 0) {
            return (
                question.map((question, index) => {
                    if (question.status == 'ture') {
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
                                        {question.date}
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
            {displayDetails()}
        </>
    )

}
export default ForumTable;