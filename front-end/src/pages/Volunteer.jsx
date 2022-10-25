import React from "react";
import AdminHeader from "../components/Admin/AdminHeader/AdminHeader";
import { useTitle } from "../components/Title/Title"
import { Link } from "react-router-dom";


const Forums = () => {

    useTitle("Hikers")


    return (
        <div>
            <div className="mt-5 p-5 text-left signupcontainer">
                <div className="row px-3">
                    <div class="col-lg-10 col-xl-9 mx-auto shadow lg p-3 mb-5 bg-white rounded ">
                        <AdminHeader />
                        <div class="row">
                        <div class="col-8">
                            <h2 className="forumh2">Events</h2>
                        </div>
                        <div class="col-4">
                            <Link to={"/volunteerevent"}><button type="button" className="forumbtn" >Publish an event</button></Link>
                        </div>
                    </div>
                        <br></br>
                        <h6>List of the Events </h6>
                        <table class="mt-3 table">
                            <thead class="thead-dark">

                                <tr className="forumtableheader">

                                    <th scope="col">No</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="forumrows">
                                    <td>
                                        01
                                    </td>
                                    <td>
                                        02/12/2022
                                    </td>
                                    <td>
                                        9.00 am - 3.00 pm
                                    </td>
                                    <td>
                                        Anuradhapura
                                    </td>
                                    <td>
                                        A community service project will be held in Anuradhapura to donate school supplies to Mahinda Model Primary School.
                                    </td>
                                </tr>
                                <tr class="forumrows">
                                    <td>
                                        02
                                    </td>
                                    <td>
                                        10/12/2022
                                    </td>
                                    <td>
                                        9.00 am - 5.00 pm
                                    </td>
                                    <td>
                                        Maharagama Cancer Hospital
                                    </td>
                                    <td>
                                        Collecting and donating supplies to children in Apeksha Hospital Maharagama
                                    </td>
                                </tr>
                                <tr class="forumrows">
                                    <td>
                                        03
                                    </td>
                                    <td>
                                        18/12/2022
                                    </td>
                                    <td>
                                        8.00 am - 1.00 pm
                                    </td>
                                    <td>
                                        Galle
                                    </td>
                                    <td>
                                       Donating fund to Senehasa Nawathena Elders Home in Galle
                                    </td>
                                </tr>
                                <tr class="forumrows">
                                    <td>
                                        04
                                    </td>
                                    <td>
                                        24/12/2022
                                    </td>
                                    <td>
                                        10.00 am - 4.00 pm
                                    </td>
                                    <td>
                                        Matara
                                    </td>
                                    <td>
                                        A community service project will be held in Matara beach to clean the beach
                                    </td>
                                </tr>
                                <tr class="forumrows">
                                    <td>
                                        05
                                    </td>
                                    <td>
                                        30/12/2022
                                    </td>
                                    <td>
                                        9.00 am - 5.00 pm
                                    </td>
                                    <td>
                                        Kurunegala
                                    </td>
                                    <td>
                                        A community service project will be held in Kurungeala to plant trees 
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );


}

export default Forums;