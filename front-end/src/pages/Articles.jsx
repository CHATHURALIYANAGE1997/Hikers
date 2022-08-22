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
                <div className="mt-1 p-1 d-flex flex-row articles-container">
                    <div className="d-flew flex-column w-100">
                        <a href="/ArticleInfo"><h3 className="pt-1 pb-2 pl-4 font-weight-bold articlesheadline">Know before you go : Dolukanda Mountain</h3></a>
                        <div className=" font-weight-bold articlesaddress">Dolukanda Mountain is a well known mountain range due to the Dolukanda Raja Maha Viharaya (Dolukanda Buddhist Temple) and it is believed that
                            the mountain is directly linked to the great Indian epic, Ramayana Trail in Sri Lanka.Nowadays this place is very famous for hiking.
                        </div>
                        <div className="mt-2 articleviews">25 views</div>
                        <div className="articleauthor">by Mahesh Vimalasena  | <h8 className="articledate">Jul 5,2022  10.00 PM</h8></div>
                    </div>
                    <img src={mountain1} className="float-left mountain-img" alt="Mountain1"></img>
                </div>
                <div className="mt-3 p-1 d-flex flex-row articles-container">
                    <div className="d-flew flex-column w-100">
                        <a href="url"><h3 className="pt-1 pb-2 pl-4 font-weight-bold articlesheadline">Must to visit : Kiribathkate gala</h3></a>
                        <div className="font-weight-bold articlesaddress">Kiribathkate gala is a very famous rock in Kurunegala district.
                            Many travelers both local and foreign used go hiking on this rock.When climbing to the peak the whole kurunegala city can be seen and there is a beautiful scenary when we climb the peak of this rock.
                        </div>
                        <div className="mt-2 articleviews">7 views</div>
                        <div className="articleauthor">by Mahesh Vimalasena  | <h8 className="articledate">Jul 4,2022  04.36 PM</h8></div>
                    </div>
                    <img src={mountain2} className="float-left mountain-img" alt="Mountain2"></img>
                </div>
            </div>
        </div>
    );
}

export default Articles