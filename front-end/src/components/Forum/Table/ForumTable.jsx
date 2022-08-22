import React from "react";
import './forumtable.css';
import {Link} from "react-router-dom";

const ForumTable = () => {
    return (
        <div>
            <table class="mt-3 table">
                <thead class="thead-dark">
                 
                    <tr className="forumtableheader">

                        <th scope="col">District</th>
                        <th scope="col">Topic</th>
                        <th scope="col">Replies</th>
                        <th scope="col">Last Post</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="forumrows">
                        <td>
                            <div className="forumdistrict">
                                Puttalam
                            </div>
                        </td>
                        <td>
                        <Link to={"/forumDetails"}><div className="forumtopic">
                                Should we travel to Srilanka
                            </div></Link>
                            <div className="forumauthor">
                                by Oneli13
                            </div>
                        </td>
                        <td>12</td>
                        <td>
                            <div>
                                June 23,2022
                            </div>
                            <div className="forumauthor">
                                by Oneli13
                            </div>
                        </td>
                    </tr>
                    <tr class="forumrows">
                        <td>
                            <div className="forumdistrict">
                                Puttalam
                            </div>
                        </td>
                        <td>
                        <Link to={"/forumDetails"}><div className="forumtopic">
                                Tourism Safety
                            </div></Link>
                            <div className="forumauthor">
                                by Ash winny
                            </div>
                        </td>
                        <td>38</td>
                        <td>
                            <div>
                                June 06,2022
                            </div>
                            <div className="forumauthor">
                                by Ash winny
                            </div>
                        </td>
                    </tr>
                    <tr class="forumrows">
                        <td>
                            <div className="forumdistrict">
                                Kurunegala
                            </div>
                        </td>
                        <td>
                        <Link to={"/forumDetails"}><div className="forumtopic">
                                Is there are good tour guides
                            </div></Link>
                            <div className="forumauthor">
                                by Patrick
                            </div>
                        </td>
                        <td>04</td>
                        <td>
                            <div>
                                May 30,2022
                            </div>
                            <div className="forumauthor">
                                by Patrick
                            </div>
                        </td>
                    </tr>
                    <tr class="forumrows">
                        <td>
                            <div className="forumdistrict">
                                Kurunegala
                            </div>
                        </td>
                        <td>
                        <Link to={"/forumDetails"}><div className="forumtopic">
                                Best Places to Hike
                            </div></Link>
                            <div className="forumauthor">
                                by Odelya
                            </div>
                        </td>
                        <td>19</td>
                        <td>
                            <div>
                                May 27,2022
                            </div>
                            <div className="forumauthor">
                                by Odelya
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
}
export default ForumTable;