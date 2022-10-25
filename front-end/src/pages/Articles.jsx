import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../components/Articles/articles.css"
import mountain1 from "../components/Articles/mountain1.JPG";
import mountain2 from "../components/Articles/mountain2.jpg";
import { FaSearchLocation } from 'react-icons/fa';
import { useTitle } from "../components/Title/Title"
import ArticleBreadCrumb from "../components/Articles/articlebreadcrumb";
import ArticleNavBar from "../components/Articles/ArticleNavBar";
import ArticleSearchBar from "../components/Articles/ArticleSearchBar";
import ArticleChild from "../components/Articles/ArticleChild";
import NotFoundPage from "./NotFoundPage";
import authToken from "../utils/authToken";
import { useSelector } from "react-redux";


const Articles = () => {
    useTitle("Hikers")
    if (localStorage.jwtToken) {
        authToken(localStorage.jwtToken);
    }

    const auth = useSelector((state) => state.auth);
    if (auth.isLoggedIn === true && auth.role === "User") {

        return (
            <div>
                <Navbar />
                <div className="p-5 mt-5 text-left container">
                    <ArticleSearchBar />
                    <div>
                        {/* <ArticleBreadCrumb /> */}
                        <ArticleNavBar />
                    </div>
                    <ArticleChild />
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

export default Articles