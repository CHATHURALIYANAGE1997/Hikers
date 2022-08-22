import React from "react";
import './forumreplies.css';

const MyReply1 = () => {
    return (
        <div>
            <h5 className="forumh5">Reply to: Is there are good tour guides?</h5>
            <div className="forum-replybox">
                <div className="row">
                    <div className="col-6">
                        <h7 className="forumboxhead2">Your Message</h7>
                    </div>
                    <div className="col-6">
                        <div className="forumguidelines">
                            <a href="/travsignup">Read our community guidelines</a>
                        </div>
                    </div>
                </div>
                <textarea rows="6" cols="120" name="comment" form="usrform">
                    Enter text here...
                </textarea>
                <div class="row">
                    <div class="col-6 mt-3">
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input forumsguidelinescheckbox" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Get notified by email when a reply is posted</label>
                        </div>
                    </div>
                    <div class="col-6 mt-3">
                        <div class="container">
                            <div className="d-flex flex-row justify-content-right">
                                <button type="button" className="btn btn-primary forumreplybtn" >Post your reply</button>
                                <button type="button" className=" btn btn-outline-primary forumpreviewbtn" >Preview</button>
                            </div>
                        </div>
                        {/* <div class="row">
                                <div class="col">
                                    <button type="button" className="forumreplybtn" >Post your reply</button>
                                    <div class="col">
                                        <button type="button" className="forumpreviewbtn" >Preview</button>
                                    </div>
                                </div>
                            </div> */}

                        {/* <div className="forumbuttons">
                            <div>
                                <button type="button" className="forumreplybtn" >Post your reply</button>
                            </div>
                            <div>
                                <button type="button" className="forumpreviewbtn" >Preview</button>
                            </div>
                        </div> */}
                        {/* <div class="container">
                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-danger form-control  btn-block">Cancel</button></div>
                                <div class="col">
                                    <button id="btnSubmit" class="btn btn-primary form-control btn-block" type="submit"></button></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    );
}
export default MyReply1;