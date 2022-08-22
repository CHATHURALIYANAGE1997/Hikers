import React from "react";
import "../Styles/landingPage.css"
import WelcomeHikers from "../components/WelcomeHikers/welcomeHikers";
import Navbar from "../components/Navbar/Navbar";
import ArticleSearchBar from "../components/Articles/ArticleSearchBar";
import ForumBox from "../components/Forum/ForumDetails/Forumbox";
import ForumReplies from "../components/Forum/Reply/ForumReplies";

const ForumDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="p-5 mt-5 text-left container">
                <ArticleSearchBar />
                <ForumBox />
                <ForumReplies />

            </div>
        </div>
    )
}
export default ForumDetails