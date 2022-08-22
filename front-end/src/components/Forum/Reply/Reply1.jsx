import React from "react";
import './forumreplies.css';
import boy1 from "./boy1.jpg";



const Reply1 = () => {
    return (
        <div>
                <div className="forum-box2">
                    <div class="container">
                        <div class="row">
                            <div class="forumbox4 col-sm-4">
                                <img src={boy1} className="float-left boy1" alt="userimage"></img>
                                <h5 className="forumboxh5">Bimalka</h5>
                                <h6 className="forumboxh6">Galewela,Sri Lanka</h6>
                                <div className="forumboxdetailsIcons">
                                    <p><i class="fa fa-commenting"></i> 1934 posts</p>
                                    <p><i class="fa fa-pencil-square-o"></i> 286 reviews</p>
                                    <p><i class="fa fa-thumbs-up"></i> 53 helpful votes</p>
                                </div>
                            </div>
                            <div class="forumbox col-sm-8">
                             
                                    <h7 className="forumboxh7">1.Reply :Is there good tour guides?</h7><br />
                                <p className="forumboxpara">I am from Kurunegala and i know that there are lot of experienced tour guides
                                in our city.Some of them work for agencies and the rest of the others would do tour guiding individually.
                                    <br />
                                    <br />
                                    There are many tour guides who are well experienced in doing their job.So trust our country and come to Sri lanka and feel 
                                it by yourself
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
            
    );
}
export default Reply1;