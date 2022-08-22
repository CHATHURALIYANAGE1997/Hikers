import React from "react";
import './forumbox.css';
import userimage from "./userimage.png";
// import { BsFillChatDotsFill,FaUserEdit2,FaRegThumbsUp4 } from "react-icons/fa";

const ForumBox = () => {
    return (
        <div>
            <div className="forum-box">
                <div className="forum-box2">
                    <div class="container">
                        <div class="row">
                            <div class="forumbox4 col-sm-4">
                                <img src={userimage} className="float-left userimage" alt="userimage"></img>
                                <h5 className="forumboxh5">Patrick</h5>
                                <h6 className="forumboxh6">London,United Kingdom</h6>
                                <div className="forumboxdetailsIcons">
                                    <p><i class="fa fa-commenting"></i> 56 posts</p>
                                    <p><i class="fa fa-pencil-square-o"></i> 02 reviews</p>
                                    <p><i class="fa fa-thumbs-up"></i> 04 helpful votes</p>
                                </div>
                            </div>
                            <div class="forumbox col-sm-8">
                                <h7 className="forumboxh7">Is there good tour guides?</h7><br />
                                <p className="forumboxpara">I am visiting to srilanka for the first time and i have heard that there are lot of
                                    beautiful mountains to hike in kurunegala
                                    <br />
                                    <br />
                                    Is there good tour guides for us to take the guidance through out our trip.We would like to
                                    climb mountains and do camping but we are having a problem of feeling insecurity of hiking.
                                    <br />
                                    <br />
                                    Thank You.</p>
                                <div class="row">
                                    <div class=" col-sm-6">
                                        <div>
                                            <button type="button" className="btn btn-primary" >Reply</button>
                                        </div>
                                    </div>
                                    <div class=" col-sm-6">
                                        <div className="forumreport mb-10">
                                        <a href="/travsignup">Report inappropriate content</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ForumBox;