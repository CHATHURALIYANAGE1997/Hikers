import React from "react";
import './forumreplies.css';
import boy2 from "./boy2.jpg";


const Reply2 = () => {
    return (
        <div>
                <div className="forum-box2">
                    <div class="container">
                        <div class="row">
                            <div class="forumbox4 col-sm-4">
                                <img src={boy2} className="float-left boy2" alt="boy2"></img>
                                <h5 className="forumboxh5">SurenK</h5>
                                <h6 className="forumboxh6">Kurunegala,Sri Lanka</h6>
                                <div className="forumboxdetailsIcons">
                                    <p><i class="fa fa-commenting"></i> 65 posts</p>
                                    <p><i class="fa fa-pencil-square-o"></i> 28 reviews</p>
                                    <p><i class="fa fa-thumbs-up"></i> 43 helpful votes</p>
                                </div>
                            </div>
                            <div class="forumbox col-sm-8">
                            <h7 className="forumboxh7">2.Reply : Is there good tour guides?</h7><br />
                                <p className="forumboxpara">There are so many tour guides near Kurunegala city as there are many mountains
                                to hike near this city.
                                    <br />
                                    <br />
                                    Some of them work for agencies and the rest would do guiding individually.So trust our country and come
                                    to Sri Lanka and feel it by your self.
                                    <br />
                                    <br />
                                    Thank You.</p>
                                <div class="row">
                                    <div class=" col-sm-6">
                                        <div>
                                            <button type="button" className="btn btn-primary " >Reply</button>
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
export default Reply2;