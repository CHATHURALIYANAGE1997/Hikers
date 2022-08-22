import React from "react";
import ArticleNavBar from "../../Articles/ArticleNavBar";
import './forumreplies.css';
import MyReply from "./MyReply";
import Reply1 from "./Reply1";
import Reply2 from "./Reply2";



const ForumReplies = () => {
    return (
        <div>
            <div class="row mt-3">
                <div class="col-8">
                    <h3 className="forumh2 ">10 replies to this topic</h3>

                </div>

                <div class="col-4">
                    <ArticleNavBar />
                </div>
                <hr></hr>
                <Reply1 />
                <hr></hr>
                <Reply2 />
                <hr></hr>
                <MyReply />
            </div>

        </div>
    );
}
export default ForumReplies;