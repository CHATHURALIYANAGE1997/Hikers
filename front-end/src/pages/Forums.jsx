import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useTitle } from "../components/Title/Title"
import ForumTable from "../components/Forum/Table/ForumTable";
import "../components/Forum/forum.css";
import ArticleSearchBar from "../components/Articles/ArticleSearchBar";
import ArticleNavBar from "../components/Articles/ArticleNavBar";
import { Link } from "react-router-dom";



const Forums = () => {

    useTitle("Hikers")


    return (
        <div>
            <Navbar />
            <div className="p-5 mt-5 text-left container">
                <ArticleSearchBar />
                <div class="container">
                    <div class="row">
                        <div class="col-8">
                            <h3 className="forumh2">20,174 topics from our community</h3>
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

export default Forums;