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

const Articles = () => {
    useTitle("Hikers")

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

export default Articles