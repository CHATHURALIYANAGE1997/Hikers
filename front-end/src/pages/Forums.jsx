import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useTitle } from "../components/Title/Title"
import ForumTable from "../components/Forum/Table/ForumTable";
import "../components/Forum/forum.css";
import ArticleSearchBar from "../components/Articles/ArticleSearchBar";
import ArticleNavBar from "../components/Articles/ArticleNavBar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import NotFoundPage from './NotFoundPage';
import { useSelector } from "react-redux";
import authToken from "../utils/authToken";


const Forums = () => {

    useTitle("Hikers")

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

    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);

    var qnumbers = 0;
    for (let i = 0; i < question.length; i++) {
        if (question[i].status == 'ture') {
            qnumbers++;
        }
    }



    if (auth.isLoggedIn === true && auth.role === "User") {

        return (
            <div>
                <Navbar />
                <div className="p-5 mt-5 text-left container">
                    <ArticleSearchBar />
                    <div class="container">
                        <div class="row">
                            <div class="col-8">
                                <h3 className="forumh2">{qnumbers} topics from our community</h3>
                            </div>
                            <div class="col-4">
                                <Link to={"/forumQuestion"}><button type="button" className="forumbtn" >Ask a question</button></Link>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-8">
                                {/* vcd */}
                            </div>
                            <div class="col-4">
                                <ArticleNavBar />
                            </div>
                        </div>

                        <div>
                            <table class="mt-3 table">
                                <thead class="thead-dark">
                                    <tr className="forumtableheader">

                                        <th scope="col">Topic</th>
                                        <th scope="col">Replies</th>
                                        <th scope="col">Last Post</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ForumTable />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
    else {
        localStorage.clear();
        // return props.history.push("/");
        { return <div><NotFoundPage /></div> }

    }

}

export default Forums;